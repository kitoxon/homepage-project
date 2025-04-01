import { fetchPost } from "@/sanity/lib/fetchPost";
import NewsCard from "@/components/News/NewsCard";
import Link from "next/link";
import NewsAll from "@/components/News/NewsAll";
export default async function NewsPage() {
  const news = await fetchPost();

  return (
    <div className="p-5 md:p-6 mt-[140px]">
      <h1 className="text-5xl md:text-[64px] text-center font-bold">
        お知らせ
      </h1>
      <NewsAll initialNews={news} />
    </div>
  );
}
