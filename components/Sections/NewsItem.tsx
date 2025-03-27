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
  };
};
export default function NewsItem({ article }: NewsItemProps) {
  return (
    <div className="flex items-center gap-5" key={article.slug.current}>
      <Image
        src={urlFor(article.mainImage).url()}
        alt={article.title}
        width={240}
        height={180}
        className="rounded-[20px] h-auto"
      />
      <div className="flex flex-col gap-[10px]">
        <div>
          <p className="text-[15px] text-[#000000ff] leading-[2]">
            {new Intl.DateTimeFormat("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.publishedAt))}
          </p>
        </div>

        <h2 className="text-lg font-semibold leading-[1.4]">{article.title}</h2>

        {Array.isArray(article.body) && (
          <p className="text-[#000000ff] leading-[1.8] text-lg">
            {getPlainText(article.body)}
          </p>
        )}
      </div>
    </div>
  );
}
