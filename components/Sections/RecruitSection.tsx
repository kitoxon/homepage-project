"use client";

import IconButton from "../Global/GradientButton";
import ArrowDownCircle from "../Icons/ArrowDownCircle";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function RecruitSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.4, 0, 1],
      },
    }),
  };
  return (
    <div className="max-w-[80rem] mx-auto px-10 py-[120px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={divVariants}
        className="text-white flex gap-10 w-full items-center"
      >
        <p className="text-4xl font-semibold leading-[1.3] text-left break-keep w-1/2">
          スポーツの価値を 私たちと一緒に高めませんか？
        </p>
        <div className="flex flex-col gap-10 w-1/2 max-h-[180px] h-full justify-center">
          <p className="break-keep text-[15px] font-medium leading-[2]">
            わたしたちは個のちからを最大限に活かしたチーム戦を実践しています。
            チームのビジョンに共感し、共に前進できる仲間を探しています。
          </p>
          <div className="flex justify-start">
            <IconButton
              iconComponent={ArrowDownCircle}
              text="
              募集一覧を見る"
              href="https://en-gage.net/nextstairs_career/"
              from="recruit"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
