"use client";
import GradientButton from "../Global/GradientButton";
import ArrowDownCircle from "../Icons/ArrowDownCircle";
import WhiteButton from "../Global/WhiteButton";
import ArrowDownCircleWhite from "../Icons/ArrowDownCircleWhite";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BusinessSection() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const divVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (below) and invisible
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
    <div className="py-20">
      <div className="px-10">
        <p className="text-[#333] font-medium text-2xl leading-none">
          事業内容
        </p>
        <p
          style={{
            background:
              "linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
          className="font-semibold text-[144px] leading-none text-transparent tracking-[0.07em] h-auto mb-[-22px] font-poppins"
        >
          Business
        </p>
      </div>
      <div className="flex flex-col gap-[180px]">
        <div id="sportsmarketing">
          <div
            className="rounded-br-[50px] rounded-tr-[50px] py-[80px] pr-[300px] w-[calc(50%+300px)] flex justify-end"
            style={{
              background:
                "linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1))",
            }}
          >
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={divVariants}
              className="w-[640px] px-10 text-white"
            >
              <p className="text-lg mb-5 leading-none font-medium">
                Brand Insight(ブランドインサイト)　
              </p>
              <p className="text-4xl leading-[1.3] mb-10 font-medium">
                スポンサー広告価値換算サービス
              </p>
              <p className="leading-[2] text-[15px]">
                下記の悩みを解決するために、「スポーツマーケティング事業」は、スポンサーシップの価値を定量化し、戦略的な分析に基づくアドバイスを提供することで、企業がより効果的なスポンサーシップ戦略を構築できるようサポートします。
                スポンサーシップ投資の効果測定の難しさ
                スポンサーシップを通じたブランド露出や認知度向上の定量的な効果測定は、直接的な売上増加とは異なり、複雑かつ難しいとされています。特に、スポンサーのメディア露出の価値を図る際の「消費者の購買決定にどのような影響を与えているのか」という疑問は、企業がスポンサーシップへの投資額やブランド戦略を決定する上で大きな悩みとなっています。
                スポンサーシップ効果の最大化とROIの改善
                スポンサーシップに関わる投資に対して、最大限のリターンを求めることはすべてのスポンサー企業の目標です。しかし、どのスポンサーシップ機会が最も価値があるのかを判断し、限られた予算内で最適な露出を得るための戦略を立てることは容易ではありません。また、スポンサーシップの成果を時間の経過と共に持続させ、改善していくための効果的なPDCAサイクルを実施することも大きな課題となります。
              </p>
              <div className="my-[30px] flex justify-center">
                <WhiteButton
                  iconComponent={<ArrowDownCircleWhite />}
                  text="詳しくはこちら"
                  href="https://brand-insight.com"
                  from="brandinsight"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div id="spoship" className="w-full flex justify-end">
          <div className="rounded-bl-[50px] rounded-tl-[50px] py-[80px] pl-[300px] w-[calc(50%+300px)] bg-[#f5f5f5]">
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={divVariants}
              className="px-10 w-[640px]"
            >
              <p
                style={{
                  background:
                    "linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
                className="font-semibold text-lg leading-none text-transparent mb-5"
              >
                SpoShip(スポシプ)メディア
              </p>
              <p className="text-4xl mb-10 leading-[1.3] font-semibold">
                スポーツスポンサーシップメディア
              </p>
              <p className="leading-[2] text-[15px]">
                プロスポーツチームのスポンサーセールスを担当する方々をサポートするWebメディアです。
                スポンサーシップの最新トレンド、成功事例、効果的なセールス戦略、スポンサー企業との連携方法など、実践的な情報をお届けします。
                スポーツ業界でのスポンサーシップ活動をより効果的にするためのヒントや洞察を提供し、皆様のビジネスの成長を支援します。
              </p>
              <div className="my-[30px] flex justify-center">
                <GradientButton
                  iconComponent={ArrowDownCircle}
                  text="詳しくはこちら"
                  href="https://spoship.com"
                  from="spoship"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
