"use client";
import NewsCard from "./NewsCard";
import { useState } from "react";
import Link from "next/link";
import NewsCardSkeleton from "./NewsCardSkeleton";
export default function NewsAll({ initialNews }: { initialNews: any[] }) {
  const batchSize = 6;
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + batchSize);
      setLoading(false);
    }, 1000);
  };

  const visibleNews = initialNews.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 md:p-20 py-20 items-stretch">
        {visibleNews.map((article) => (
          <NewsCard key={article.slug.current} article={article} />
        ))}

        {loading &&
          Array.from({ length: batchSize }).map((_, idx) => (
            <NewsCardSkeleton key={`skeleton-${idx}`} />
          ))}
      </div>

      {!loading && visibleCount < initialNews.length && (
        <div className="flex justify-center ">
          <button
            onClick={handleLoadMore}
            className="cursor-pointer border border-[#001849] px-10 py-3 text-sm rounded-3xl text-[#001849] font-bold hover:bg-[#001849] hover:text-white transition-all"
          >
            もっと見る
          </button>
        </div>
      )}
    </>
  );
}
