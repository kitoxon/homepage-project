import { fetchPost } from "@/sanity/lib/fetchPost";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";
export default async function NewsPage() {
  const news = await fetchPost();
  const getPlainText = (body: any) => {
    return (
      body
        .filter((block: any) => block._type === "block") // Get only text blocks
        .map((block: any) =>
          block.children.map((child: any) => child.text).join(" "),
        )
        .join(" ") // Join all paragraphs
        .slice(0, 102) + "..."
    ); // Trim text
  };
  return (
    <div className="p-6 mt-[140px]">
      <h1 className="text-[64px] text-center font-bold">お知らせ</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-20">
        {news.map((article: any) => (
          <div
            key={article.slug.current}
            className="rounded-[10px] [box-shadow:10px_10px_15px_rgba(0,_0,_0,_0.1)]"
          >
            <Image
              src={urlFor(article.mainImage).width(800).height(600).url()}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg w-full object-cover h-auto"
            />
            <div className="pt-10 pb-[30px] px-5 flex flex-col gap-5">
              <p className="text-[15px] text-[#000000ff] leading-[2]">
                {new Intl.DateTimeFormat("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(article.publishedAt))}
              </p>
              <h2 className="text-lg font-semibold text-[#001849ff] leading-[1.4]">
                {article.title}
              </h2>

              {Array.isArray(article.body) && (
                <p className="text-[#000000ff] leading-[2] text-[15px]">
                  {getPlainText(article.body)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
