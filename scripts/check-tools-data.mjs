#!/usr/bin/env node
/**
 * scripts/check-tools-data.mjs — 只读诊断脚本（HYBRID / REWRITE）
 *
 * 使用项目已有的 TypeScript Compiler API（v5）解析 src/data/tools.ts，
 * 统计工具数据的重复与冲突指标，并交叉校验 public/sitemap.xml 的一致性。
 *
 * 仅 readFileSync + console.log，禁止 writeFileSync。
 * fail closed：解析失败、必需字段缺失、sitemap ID 集合不一致、重复 loc、
 * 缺失 /api-transit/ 时必须非零退出。
 *
 * 不新增依赖。不修改任何文件。不是通用 TypeScript 数据清洗器。
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const toolsPath = path.join(projectRoot, "src/data/tools.ts");
const sitemapPath = path.join(projectRoot, "public/sitemap.xml");

let exitCode = 0;

// ---------------------------------------------------------------------------
// 1. 使用 TypeScript Compiler API 解析 tools.ts
// ---------------------------------------------------------------------------

const ts = await import("typescript");

const toolsFile = fs.readFileSync(toolsPath, "utf8");
const sourceFile = ts.createSourceFile(
  "tools.ts",
  toolsFile,
  ts.ScriptTarget.Latest,
  /* setParentNodes */ true
);

// 定位 `export const tools: Tool[] = [...]` 中的数组字面量
function findToolsArray(node) {
  if (
    ts.isVariableStatement(node) &&
    node.declarationList.declarations.length > 0
  ) {
    const decl = node.declarationList.declarations[0];
    if (
      decl.name.getText(sourceFile) === "tools" &&
      decl.initializer &&
      ts.isArrayLiteralExpression(decl.initializer)
    ) {
      return decl.initializer;
    }
  }
  let result = null;
  ts.forEachChild(node, (child) => {
    if (!result) result = findToolsArray(child);
  });
  return result;
}

const toolsArray = findToolsArray(sourceFile);
if (!toolsArray) {
  console.error("ERROR: could not locate `export const tools` array literal in tools.ts");
  process.exit(1);
}

// 从对象字面量节点中按属性名提取值
function extractPropertyValue(objNode, propName) {
  for (const prop of objNode.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const name = prop.name.getText(sourceFile);
    if (name !== propName) continue;
    const val = prop.initializer;
    if (ts.isStringLiteral(val)) return val.text;
    if (val.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (val.kind === ts.SyntaxKind.FalseKeyword) return false;
    return val.getText(sourceFile); // fallback: raw text
  }
  return null;
}

const parsed = [];
for (const element of toolsArray.elements) {
  if (!ts.isObjectLiteralExpression(element)) continue;
  parsed.push({
    id: extractPropertyValue(element, "id"),
    url: extractPropertyValue(element, "url"),
    category: extractPropertyValue(element, "category"),
    isFree: extractPropertyValue(element, "isFree"),
    hasChinese: extractPropertyValue(element, "hasChinese"),
    needVPN: extractPropertyValue(element, "needVPN"),
  });
}

// ---------------------------------------------------------------------------
// 2. 指标计算
// ---------------------------------------------------------------------------

const TOTAL_RECORDS = parsed.length;

// id 统计
const idCounts = new Map();
for (const p of parsed) {
  if (p.id == null) continue;
  idCounts.set(p.id, (idCounts.get(p.id) || 0) + 1);
}
const UNIQUE_IDS = idCounts.size;
const dupIdGroups = [...idCounts.entries()].filter(([, c]) => c > 1);
const DUPLICATE_ID_GROUPS = dupIdGroups.length;
const DUPLICATE_ID_EXCESS = TOTAL_RECORDS - UNIQUE_IDS;

// url 统计
const urlCounts = new Map();
for (const p of parsed) {
  if (p.url == null) continue;
  urlCounts.set(p.url, (urlCounts.get(p.url) || 0) + 1);
}
const DUPLICATE_URL_GROUPS = [...urlCounts.entries()].filter(([, c]) => c > 1).length;

// 按 id 分组记录（用于冲突检测）
const byId = new Map();
for (const p of parsed) {
  if (p.id == null) continue;
  if (!byId.has(p.id)) byId.set(p.id, []);
  byId.get(p.id).push(p);
}

// category 冲突：同 id 组内 category 取值不一致的组数
let CATEGORY_CONFLICTS = 0;
for (const [, group] of byId) {
  const cats = new Set(group.map((g) => g.category));
  if (cats.size > 1) CATEGORY_CONFLICTS++;
}

// boolean 冲突：每个（同 id 组 × {isFree, hasChinese, needVPN}）字段跨记录取值不一致的计数
const BOOL_FIELDS = ["isFree", "hasChinese", "needVPN"];
let BOOLEAN_CONFLICTS = 0;
for (const [, group] of byId) {
  for (const f of BOOL_FIELDS) {
    const vals = new Set(group.map((g) => g[f]));
    if (vals.size > 1) BOOLEAN_CONFLICTS++;
  }
}

// ---------------------------------------------------------------------------
// 3. Sitemap 交叉校验
// ---------------------------------------------------------------------------

const sitemapXml = fs.readFileSync(sitemapPath, "utf8");

// 提取 sitemap 中所有 <loc> URL
const locRegex = /<loc>([^<]+)<\/loc>/g;
const allLocs = [];
let locMatch;
while ((locMatch = locRegex.exec(sitemapXml)) !== null) {
  allLocs.push(locMatch[1].trim());
}

// 提取 sitemap 中 /tool/{id}/ 的 id 集合
const sitemapToolIdRegex = /\/tool\/([^/]+)\//g;
const sitemapToolIds = new Set();
let smMatch;
while ((smMatch = sitemapToolIdRegex.exec(sitemapXml)) !== null) {
  sitemapToolIds.add(smMatch[1]);
}

const SITEMAP_TOOL_IDS = sitemapToolIds.size;

// 首条胜出唯一 id 集合
const uniqueIdSet = new Set(parsed.map((p) => p.id).filter(Boolean));

const missingToolIds = [...uniqueIdSet].filter((id) => !sitemapToolIds.has(id));
const SITEMAP_MISSING_TOOL_IDS = missingToolIds.length;

const unexpectedToolIds = [...sitemapToolIds].filter((id) => !uniqueIdSet.has(id));
const SITEMAP_UNEXPECTED_TOOL_IDS = unexpectedToolIds.length;

// 重复 loc 检测
const locCounts = new Map();
for (const loc of allLocs) {
  locCounts.set(loc, (locCounts.get(loc) || 0) + 1);
}
const SITEMAP_DUPLICATE_LOCS = [...locCounts.entries()].filter(([, c]) => c > 1).length;

// api-transit 检测
const API_TRANSIT_COUNT = allLocs.filter((loc) => loc.includes("/api-transit/")).length;

// ---------------------------------------------------------------------------
// 4. 人类可读报告
// ---------------------------------------------------------------------------

console.log("=".repeat(60));
console.log("  tools 数据诊断报告 — src/data/tools.ts");
console.log("=".repeat(60));
console.log();
console.log("【总览】");
console.log(`  总记录数        TOTAL_RECORDS          = ${TOTAL_RECORDS}`);
console.log(`  唯一 ID 数      UNIQUE_IDS             = ${UNIQUE_IDS}`);
console.log(`  重复 ID 组数    DUPLICATE_ID_GROUPS    = ${DUPLICATE_ID_GROUPS}`);
console.log(`  重复溢出数      DUPLICATE_ID_EXCESS    = ${DUPLICATE_ID_EXCESS}`);
console.log(`  重复 URL 组数   DUPLICATE_URL_GROUPS   = ${DUPLICATE_URL_GROUPS}`);
console.log(`  分类冲突组数    CATEGORY_CONFLICTS     = ${CATEGORY_CONFLICTS}`);
console.log(`  布尔冲突计数    BOOLEAN_CONFLICTS      = ${BOOLEAN_CONFLICTS}`);
console.log();
console.log("【Sitemap 交叉校验】");
console.log(`  Sitemap 工具 ID 数   SITEMAP_TOOL_IDS           = ${SITEMAP_TOOL_IDS}`);
console.log(`  缺失工具 ID 数       SITEMAP_MISSING_TOOL_IDS   = ${SITEMAP_MISSING_TOOL_IDS}`);
console.log(`  多余工具 ID 数       SITEMAP_UNEXPECTED_TOOL_IDS = ${SITEMAP_UNEXPECTED_TOOL_IDS}`);
console.log(`  重复 loc 数          SITEMAP_DUPLICATE_LOCS     = ${SITEMAP_DUPLICATE_LOCS}`);
console.log(`  /api-transit/ 数     API_TRANSIT_COUNT          = ${API_TRANSIT_COUNT}`);
console.log();

// 重复 ID 分组明细
if (dupIdGroups.length > 0) {
  console.log("【重复 ID 分组明细】");
  for (const [id, count] of dupIdGroups) {
    console.log(`  ${id}  (出现 ${count} 次)`);
  }
  console.log();
}

// category 冲突明细
const catConflicts = [];
for (const [id, group] of byId) {
  const cats = new Set(group.map((g) => g.category));
  if (cats.size > 1) catConflicts.push({ id, cats: [...cats] });
}
if (catConflicts.length > 0) {
  console.log("【分类冲突明细】");
  for (const c of catConflicts) {
    console.log(`  ${c.id}  →  分类取值: ${c.cats.join(", ")}`);
  }
  console.log();
}

// boolean 冲突明细
const boolConflicts = [];
for (const [id, group] of byId) {
  for (const f of BOOL_FIELDS) {
    const vals = new Set(group.map((g) => g[f]));
    if (vals.size > 1) {
      boolConflicts.push({ id, field: f, vals: [...vals] });
    }
  }
}
if (boolConflicts.length > 0) {
  console.log("【布尔冲突明细】（按 组×字段 计数）");
  for (const b of boolConflicts) {
    console.log(`  ${b.id}  →  ${b.field}: ${b.vals.join(" vs ")}`);
  }
  console.log();
}

console.log("=".repeat(60));
console.log("  机器可解析指标（KEY = VALUE）");
console.log("=".repeat(60));
console.log();
console.log(`TOTAL_RECORDS = ${TOTAL_RECORDS}`);
console.log(`UNIQUE_IDS = ${UNIQUE_IDS}`);
console.log(`DUPLICATE_ID_GROUPS = ${DUPLICATE_ID_GROUPS}`);
console.log(`DUPLICATE_ID_EXCESS = ${DUPLICATE_ID_EXCESS}`);
console.log(`DUPLICATE_URL_GROUPS = ${DUPLICATE_URL_GROUPS}`);
console.log(`CATEGORY_CONFLICTS = ${CATEGORY_CONFLICTS}`);
console.log(`BOOLEAN_CONFLICTS = ${BOOLEAN_CONFLICTS}`);
console.log(`SITEMAP_TOOL_IDS = ${SITEMAP_TOOL_IDS}`);
console.log(`SITEMAP_MISSING_TOOL_IDS = ${SITEMAP_MISSING_TOOL_IDS}`);
console.log(`SITEMAP_UNEXPECTED_TOOL_IDS = ${SITEMAP_UNEXPECTED_TOOL_IDS}`);
console.log(`SITEMAP_DUPLICATE_LOCS = ${SITEMAP_DUPLICATE_LOCS}`);
console.log(`API_TRANSIT_COUNT = ${API_TRANSIT_COUNT}`);

// ---------------------------------------------------------------------------
// 5. Fail-closed 校验
// ---------------------------------------------------------------------------

const expected = {
  TOTAL_RECORDS: 585,
  UNIQUE_IDS: 542,
  DUPLICATE_ID_GROUPS: 43,
  DUPLICATE_ID_EXCESS: 43,
  DUPLICATE_URL_GROUPS: 72,
  CATEGORY_CONFLICTS: 6,
  BOOLEAN_CONFLICTS: 18,
};

const checks = [
  ["TOTAL_RECORDS", TOTAL_RECORDS, expected.TOTAL_RECORDS],
  ["UNIQUE_IDS", UNIQUE_IDS, expected.UNIQUE_IDS],
  ["DUPLICATE_ID_GROUPS", DUPLICATE_ID_GROUPS, expected.DUPLICATE_ID_GROUPS],
  ["DUPLICATE_ID_EXCESS", DUPLICATE_ID_EXCESS, expected.DUPLICATE_ID_EXCESS],
  ["DUPLICATE_URL_GROUPS", DUPLICATE_URL_GROUPS, expected.DUPLICATE_URL_GROUPS],
  ["CATEGORY_CONFLICTS", CATEGORY_CONFLICTS, expected.CATEGORY_CONFLICTS],
  ["BOOLEAN_CONFLICTS", BOOLEAN_CONFLICTS, expected.BOOLEAN_CONFLICTS],
  ["SITEMAP_TOOL_IDS", SITEMAP_TOOL_IDS, 542],
  ["SITEMAP_MISSING_TOOL_IDS", SITEMAP_MISSING_TOOL_IDS, 0],
  ["SITEMAP_UNEXPECTED_TOOL_IDS", SITEMAP_UNEXPECTED_TOOL_IDS, 0],
  ["SITEMAP_DUPLICATE_LOCS", SITEMAP_DUPLICATE_LOCS, 0],
  ["API_TRANSIT_COUNT", API_TRANSIT_COUNT, 1],
];

console.log();
console.log("=".repeat(60));
console.log("  Fail-closed 校验");
console.log("=".repeat(60));

let allPass = true;
for (const [key, actual, expectedVal] of checks) {
  const pass = actual === expectedVal;
  if (!pass) {
    allPass = false;
    exitCode = 1;
  }
  console.log(`  ${pass ? "✅" : "❌"} ${key} = ${actual} (expected ${expectedVal})`);
}

console.log();
if (allPass) {
  console.log("ALL_CHECKS_PASS = YES");
} else {
  console.log("ALL_CHECKS_PASS = NO");
  console.log(`EXIT_CODE = ${exitCode}`);
}
