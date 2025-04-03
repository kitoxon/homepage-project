"use client";

import React from "react";

const baseStyle =
  "flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white transition-all duration-300";

const gradientStyle = "bg-white border-transparent relative overflow-hidden";
export default function ContactButton() {
  const commonContent = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="url(#test)"
      >
        <defs>
          <linearGradient id="test" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c6fb" />
            <stop offset="100%" stopColor="#005bea" />
          </linearGradient>
        </defs>
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
      </svg>
      <span className="transition-all font-medium duration-300 bg-gradient-to-b from-[#00c6fb] to-[#005bea] bg-clip-text text-transparent">
        お問い合わせ
      </span>
    </>
  );
  return (
    <a
      href="/contact"
      className={`${baseStyle} ${gradientStyle} hover:transform hover:translate-y-1`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {commonContent}
      </span>
    </a>
  );
}
