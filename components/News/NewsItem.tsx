import { getPlainText } from "@/utils/function";
import { urlFor } from "@/sanity/imageUrl";
import Image from "next/image";
type NewsItemProps = {
  article: {
    title: string;
    body: string | any[];
    slug: any;
    mainImage: any;
    publishedAt: string;
    categories: any[];
  };
};
export default function NewsItem({ article }: NewsItemProps) {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-5"
      key={article.slug.current}
    >
      <Image
        src={urlFor(article.mainImage).url()}
        alt={article.title}
        width={240}
        height={180}
        className="rounded-[20px] h-auto w-full md:w-auto hover:transform hover:scale-105 transition-all duration-200"
      />
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px] items-center text-[12px] md:text-[15px]">
          <p className="text-[#000000ff] leading-[2]">
            {new Intl.DateTimeFormat("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.publishedAt))}
          </p>
          <p className="leading-none bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] rounded-[30px] px-[10px] py-[3px] text-white font-medium">
            {article.categories.map((category) => category.title).join(", ")}
          </p>
        </div>

        <h2 className="text-lg font-semibold leading-[1.4]">{article.title}</h2>

        {Array.isArray(article.body) && (
          <p className="text-[#000000ff] leading-[1.8] text-[13px] md:text-lg">
            {getPlainText(article.body)}
          </p>
        )}
      </div>
    </div>
  );
}
