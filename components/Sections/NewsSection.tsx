import { fetchPost } from "@/sanity/lib/fetchPost";
import NewsList from "../News/NewsList";
export default async function NewsSection() {
  const news = await fetchPost(5);
  return (
    <div className="min-h-screen pt-[280px] pb-[140px] flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-[1280px] px-10 relative mx-auto">
        <div
          className="absolute top-[122px] left-[142px] w-[2000px] h-[calc(100%-140px)] bg-[#f5f5f5]
                         rounded-tl-[50px] rounded-bl-[50px]"
        />
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
          <div className="py-20 pl-20 pr-10 w-full relative">
            <NewsList news={news} />
          </div>
        </div>
      </div>
    </div>
  );
}
