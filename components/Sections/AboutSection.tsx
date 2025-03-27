"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function AboutSection() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0.4, 0, 1],
      },
    }),
  };
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="flex items-center w-full h-auto justify-center">
      <div className="p-20 w-7xl flex flex-row content-end items-end justify-start max-w-full flex-nowrap h-auto">
        <div className="flex mr-5 flex-col justify-center w-[calc(50%-40px)] max-w-[calc(50%-40px)] h-auto flex-nowrap">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-[200px] w-full relative"
          >
            <div className="bg-[url(/assets/about-img-1.webp)] rounded-[50px] w-[50%] h-full bg-cover bg-center absolute"></div>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-[250px] w-full relative mt-[-80px]"
          >
            <div className="bg-[url(/assets/about-img-2.webp)] rounded-[50px] w-[70%] h-full bg-cover bg-center absolute right-0"></div>
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={imageVariants}
            className="h-[250px] w-full relative mt-[-80px] flex justify-center"
          >
            <div className="bg-[url(/assets/about-img-3.webp)] rounded-[50px] w-[60%] h-full bg-cover bg-center absolute"></div>
          </motion.div>
        </div>
        <div className="flex gap-[50px] flex-col w-[573px] mb-[150px] ml-[40px] max-w-[calc(100%-40px)]">
          <p className="text-4xl break-keep leading-[1.3] font-semibold">
            インサイトを通じて、 あらゆるスポーツの価値を高める
          </p>
          <p className="break-keep leading-[2] font-medium">
            AI×テクノロジーの力におけるデータ分析技術を駆使して、
            インサイトを導き出し、スポーツチームが直面する課題の解決をする。
            それによりあらゆるスポーツの価値を高めることができる社会を実現したい。
          </p>
        </div>
      </div>
    </div>
  );
}
