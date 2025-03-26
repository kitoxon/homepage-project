"use client";

import React, { ReactElement } from "react";
import { useHoverStore } from "@/app/store";
type IconButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  iconComponent: ReactElement;
  from: string;
};
const baseStyle =
  "flex items-center space-x-2 px-6 py-3 rounded-full text-white text-sm transition-all duration-300";

const gradientStyle = "bg-white border-transparent relative overflow-hidden";
export default function IconButton({
  text,
  onClick,
  href,
  className,
  iconComponent,
  from,
}: IconButtonProps) {
  const { setActive, setFrom } = useHoverStore();
  const commonContent = (
    <>
      {iconComponent}
      <span className="transition-all font-medium duration-300 bg-gradient-to-b from-[#00c6fb] to-[#005bea] bg-clip-text group-hover:from-white group-hover:to-white text-transparent">
        {text}
      </span>
    </>
  );
  if (href) {
    return (
      <a
        onMouseEnter={() => {
          setActive(true), setFrom(from);
        }}
        onMouseLeave={() => {
          setActive(false), setFrom("");
        }}
        href={href}
        className={`${baseStyle} ${gradientStyle} ${className} group`}
      >
        <span className="absolute w-full inset-0 bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Ensure content is above the pseudo-element */}
        <span className="relative z-10 flex items-center gap-2">
          {commonContent}
        </span>
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
