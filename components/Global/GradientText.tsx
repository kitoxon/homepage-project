"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
type GradientTextProps = {
  text: string;
};
export default function GradientText({ text }: GradientTextProps) {
  const [showInnerDiv, setShowInnerDiv] = useState(true);
  const [showFillDiv, setShowFillDiv] = useState(false);
  const [unfill, setUnfill] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowFillDiv(true);

    const fillTimeout = setTimeout(() => {
      setUnfill(true);
    }, 400);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 400);
    return () => {
      clearTimeout(fillTimeout);
      clearTimeout(textTimeout);
    };
  });
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowInnerDiv(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="mb-[10px] text-left">
      <div
        className="flex flex-col items-start max-w-full"
        style={{
          background: "rgba(0,0,0,0.0)", // Transparent background
        }}
      >
        <div className="flex flex-col transform skew-x-0 -skew-y-[8deg] mb-5 md:mb-0">
          {/* {!showInnerDiv && ( */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-[80px] font-semibold leading-none text-transparent min-h-14 md:min-h-24 max-w-full font-poppins transform skew-x-0 skew-y-0 pr-1"
            style={{
              letterSpacing: "-0.07em",
              background: "linear-gradient(0deg, #00c6fb 0%, #005bea 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            {text}
          </motion.p>
          {/* )} */}

          <div className="mt-[-60px] md:mt-[-95px] flex relative content-center items-center flex-none flex-row h-[60px] md:h-20 bg-[rgba(0, 0, 0, 0, 0)] flex-nowrap max-w-full skew-0">
            <AnimatePresence>
              {showFillDiv && !unfill && (
                <motion.div
                  key="inner-div"
                  style={{
                    background:
                      "linear-gradient(0deg, #00c6fb 0%, #005bea 100%)",
                  }}
                  className="h-[60px] md:h-20 max-w-full m-0"
                  initial={{ width: 0, left: 0 }} // Start with no width
                  animate={{ width: "100%", left: 0 }} // Fill from left to right
                  transition={{ duration: 0.5, ease: [0.4, 0.4, 0, 1] }}
                  aria-hidden="true"
                ></motion.div>
              )}
              {unfill && (
                <motion.div
                  key="unfill-div"
                  style={{
                    background:
                      "linear-gradient(0deg, #00c6fb 0%, #005bea 100%)",
                  }}
                  className="absolute h-[60px] md:h-20 w-full"
                  initial={{ width: "100%", left: 0 }}
                  animate={{ width: 0, left: "100%" }}
                  transition={{
                    duration: 1,
                    ease: [0.4, 0.4, 0, 1],
                  }}
                  aria-hidden="true"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
