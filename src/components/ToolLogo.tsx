"use client";

import Image from "next/image";
import { useState } from "react";

interface ToolLogoProps {
  url: string;
  icon: string;
  name: string;
  logoUrl?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

const imageSizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
};

const textSizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export default function ToolLogo({ url, icon, name, logoUrl, size = "md" }: ToolLogoProps) {
  const [imgError, setImgError] = useState(false);

  const getFaviconUrl = (toolUrl: string) => {
    try {
      const domain = new URL(toolUrl).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return null;
    }
  };

  const logoSrc = logoUrl || getFaviconUrl(url);

  if (logoSrc && !imgError) {
    return (
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        width={imageSizeMap[size]}
        height={imageSizeMap[size]}
        className={`${sizeMap[size]} rounded-lg object-contain`}
        onError={() => setImgError(true)}
        loading="lazy"
        unoptimized
      />
    );
  }

  return <span className={textSizeMap[size]}>{icon}</span>;
}
