"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
type GradientTextProps = {
  text: string;
};
export default function GradientText({ text }: GradientTextProps) {
  const [showInnerDiv, setShowInnerDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInnerDiv(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-[10px] text-left">
      <div
        className="flex flex-col items-start max-w-full"
        style={{
          background: "rgba(0,0,0,0.0)", // Transparent background
        }}
      >
        <div className="flex flex-col transform skew-x-0 -skew-y-[8deg] mb-5 md:mb-0">
          {!showInnerDiv && (
            <p
              className="text-5xl md:text-[80px] font-semibold leading-none text-transparent min-h-14 md:min-h-24 max-w-full font-poppins transform skew-x-0 skew-y-0 pr-1"
              style={{
                letterSpacing: "-0.07em",
                background: "linear-gradient(0deg, #00c6fb 0%, #005bea 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              {text}
            </p>
          )}

          <div className="mt-[-60px] md:mt-[-95px] flex relative content-center items-center flex-none flex-row h-[60px] md:h-20 bg-[rgba(0, 0, 0, 0, 0)] flex-nowrap max-w-full skew-0">
            <AnimatePresence>
              {showInnerDiv && (
                <motion.div
                  key="inner-div"
                  style={{
                    background:
                      "linear-gradient(0deg, #00c6fb 0%, #005bea 100%)",
                  }}
                  className="h-[60px] md:h-20 max-w-full m-0"
                  initial={{ width: 0 }} // Start with no width
                  animate={{ width: "100%" }} // Fill from left to right
                  exit={{ width: 0, marginLeft: "100%" }} // Unfill from left to right (shift to the right)
                  transition={{ duration: 0.5, ease: [0.4, 0.4, 0, 1] }}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
