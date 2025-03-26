import { fetchPost } from "@/sanity/lib/fetchPost";

export default function NewsSection() {
  const news = fetchPost();
  return (
    <section>
      <div className="pt-[280px] pb-[140px] flex flex-col items-center">
        <div className="w-[1280px] px-10">
          <div>
            <p className="text-[144px] font-poppins font-semibold text-[#f5f5f5] tracking-[-0.07em] leading-none">
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
            <div className="rounded-tl-[50px] rounded-bl-[50px] py-20 pl-20 pr-10 bg-[#f5f5f5] w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
