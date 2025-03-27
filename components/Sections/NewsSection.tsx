import { fetchPost } from "@/sanity/lib/fetchPost";
import { urlFor } from "@/sanity/imageUrl";
import Image from "next/image";
import { getPlainText } from "@/utils/function";
import NewsItem from "./NewsItem";
export default async function NewsSection() {
  const news = await fetchPost(5);
  return (
    <div className="min-h-screen pt-[280px] pb-[140px] flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-[1280px] px-10">
        <div>
          <p className="text-[8vw] md:text-[144px] font-poppins font-semibold text-[#f5f5f5] tracking-[-0.07em] leading-none mb-[-22px]">
            NEWS
          </p>
        </div>
        <div className="flex gap-[70px]">
          <p
            className="text-2xl font-medium pt-10"
            style={{ writingMode: "vertical-rl" }}
          >
            新着情報
          </p>
          <div className="absolute rounded-tl-[50px] rounded-bl-[50px] py-20 pl-20 pr-10 bg-[#f5f5f5] w-full left-[23.5%] right-0">
            <div className="max-w-5xl w-full flex flex-col gap-[60px] h-full">
              {news.map((article: any) => (
                <NewsItem key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
