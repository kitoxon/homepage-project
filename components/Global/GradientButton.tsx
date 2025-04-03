"use client";

import React, { ComponentType, ReactElement, useState } from "react";
import { useHoverStore } from "@/app/store";
import { hover } from "framer-motion";
type IconButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  iconComponent: ComponentType<{ fill: string; gradientId: string }>;
  from: string;
  gradientId: string;
};
const baseStyle =
  "flex items-center space-x-2 px-6 py-3 rounded-full text-white text-sm transition-all duration-300";

const gradientStyle =
  "bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] border-transparent hover:bg-none hover:bg-white";
export default function IconButton({
  text,
  onClick,
  href,
  className,
  iconComponent: IconComponent,
  from,
  gradientId,
}: IconButtonProps) {
  const { setActive, setFrom } = useHoverStore();
  const [hovered, setHovered] = useState(false);
  const fill = hovered ? `url(#${gradientId})` : "#fff";
  const commonContent = (
    <>
      <IconComponent fill={fill} gradientId={gradientId} />
      <span className="transition-all duration-300 font-medium group-hover:bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] group-hover:bg-clip-text group-hover:text-transparent">
        {text}
      </span>
    </>
  );
  if (href) {
    return (
      <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={href}
        aria-label={text ? text : ""}
        target={href?.startsWith("http") ? "_blank" : undefined}
        className={`${baseStyle} ${gradientStyle} ${className} group`}
      >
        {commonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${gradientStyle} ${className} group`}
    >
      {commonContent}
    </button>
  );
}
