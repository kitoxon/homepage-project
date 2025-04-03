import { fetchPost } from "@/sanity/lib/fetchPost";
import NewsList from "../News/NewsList";
export default async function NewsSection() {
  const news = await fetchPost(5);
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-[140px] flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-[1280px] px-5 md:px-10 relative mx-auto">
        <div
          className="absolute top-[52px] left-[68px] md:top-[122px] md:left-[142px] w-screen min-w-screen h-[calc(100%-50px)] md:h-[calc(100%-140px)] bg-[#f5f5f5]
                         rounded-tl-[50px] rounded-bl-[50px]"
        />
        <div>
          <p className="text-[64px] md:text-[144px] font-poppins font-semibold text-[#f5f5f5] tracking-[-0.07em] leading-none mb-[-22px]">
            NEWS
          </p>
        </div>
        <div className="flex md:gap-[70px]">
          <p
            className="text-2xl font-medium pt-10"
            style={{ writingMode: "vertical-rl" }}
          >
            新着情報
          </p>
          <div className="py-[60px] md:py-20 pl-10 md:pl-20 md:pr-10 w-full relative">
            <NewsList news={news} />
          </div>
        </div>
      </div>
    </div>
  );
}
