import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";
import { getPlainText } from "@/utils/function";
import Link from "next/link";

export default function NewsCard({ article }: { article: any }) {
  return (
    <Link href={`/news/${article.slug.current}`}>
      <div className="rounded-[10px] pb-[30px] [box-shadow:10px_10px_15px_rgba(0,_0,_0,_0.1)] h-full cursor-pointer">
        <Image
          src={urlFor(article.mainImage).url()}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg w-full object-cover h-auto"
        />
        <div className="pt-10 px-5 flex flex-col gap-5">
          <p className="text-[15px] text-black leading-[2]">
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
            <p className="text-black leading-[2] text-[15px]">
              {getPlainText(article.body)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
