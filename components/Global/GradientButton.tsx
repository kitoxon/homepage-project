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

const gradientStyle =
  "bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] border-transparent hover:bg-none hover:bg-white";
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
      <span className="transition-all duration-300 font-medium group-hover:bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] group-hover:bg-clip-text group-hover:text-transparent">
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
