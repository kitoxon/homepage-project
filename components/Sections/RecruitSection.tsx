"use client";

import IconButton from "../Global/GradientButton";
import ArrowDownCircle from "../Icons/ArrowDownCircle";
export default function RecruitSection() {
  return (
    <div className="max-w-[80rem] mx-auto px-10 py-[120px]">
      <div className="text-white flex gap-10 w-full items-center">
        <p className="text-4xl font-semibold leading-[1.3] text-left break-keep w-1/2">
          スポーツの価値を 私たちと一緒に高めませんか？
        </p>
        <div className="flex flex-col justify-start gap-10 w-1/2">
          <p className="break-keep text-[15px] font-medium leading-[2]">
            わたしたちは個のちからを最大限に活かしたチーム戦を実践しています。
            チームのビジョンに共感し、共に前進できる仲間を探しています。
          </p>
          <div className="flex justify-start">
            <IconButton
              iconComponent={<ArrowDownCircle />}
              text="
              募集一覧を見る"
              href="https://en-gage.net/nextstairs_career/"
              from="spoship"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
