"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";
import Link from "next/link";
import IconButton from "../Global/GradientButton";
import ArrowDownCircle from "../Icons/ArrowDownCircle";
export default function NewsList({ news }: { news: any[] }) {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-[60px] h-full">
      {news.map((article, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            key={article.slug.current}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.4, 0, 1],
              delay: index * 0.1,
            }}
          >
            <Link href={`/news/${article.slug.current}`}>
              <NewsItem article={article} />
            </Link>
          </motion.div>
        );
      })}
      <div className="flex justify-center">
        <IconButton
          iconComponent={ArrowDownCircle}
          text="すべてのお知らせを見る"
          from="news"
          href="/news"
        />
      </div>
    </div>
  );
}
