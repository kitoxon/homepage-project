"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function CompanySection() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: {
      filter: "blur(10px)",
    },
    visible: {
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.4, 0.4, 0, 1],
      },
    },
  };
  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div>
      <div className="flex items-end flex-col px-10">
        <p className="text-[#333] text-2xl font-medium leading-none">
          会社概要
        </p>
        <p className="text-[#f5f5f5] text-[144px] leading-none font-semibold tracking-[-0.07em] font-poppins">
          Company
        </p>
      </div>
      <div className="flex items-end">
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={imageVariants}
          className="pr-10 w-[50%] mb-[-200px]"
        >
          <div className="bg-[url(/assets/company-img.webp)] h-[466px] rounded-br-[50px] rounded-tr-[50px] bg-cover bg-center"></div>
        </motion.div>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={divVariants}
          className="text-[#333] text-[15px] w-[50%] leading-[1.8]"
        >
          <div className="p-[30px] flex border-b-1 w-full">
            <p className="min-w-[120px] font-medium">会社名</p>
            <p>株式会社NextStairs</p>
          </div>
          <div className="p-[30px] flex border-b-1 w-full">
            <p className="min-w-[120px] font-medium">代表者</p>
            <p className="leading-[1.8]">万井 拓馬</p>
          </div>
          <div className="p-[30px] flex border-b-1 w-full">
            <p className="min-w-[120px] font-medium">設立</p>
            <p className="leading-[1.8]">2022年03月</p>
          </div>
          <div className="p-[30px] flex border-b-1 w-full">
            <p className="min-w-[120px] font-medium">資本金</p>
            <p className="leading-[1.8]">16,200,000円(資本準備金含む)</p>
          </div>
          <div className="p-[30px] flex border-b-1 w-full">
            <p className="min-w-[120px] font-medium">事業内容</p>
            <p className="leading-[1.8]">
              スポンサー広告価値換算 事業
              <br />
              スポーツメディア 事業
            </p>
          </div>
          <div className="p-[30px] flex w-full">
            <p className="min-w-[120px] font-medium">所在地</p>
            <p className="leading-[1.8]">
              本社
              <br />
              〒810-0041
              <br />
              FGN(Fukuoka Growth Next)オフィス
              <br />
              福岡県福岡市中央区大名2-6-11
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
