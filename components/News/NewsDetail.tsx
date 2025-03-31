"use client";
import { PortableText } from "next-sanity";
import ArrowBack from "../Icons/ArrowBack";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
type Props = {
  article: {
    title: string;
    body: string | any[];
    slug: any;
    mainImage: any;
    publishedAt: string;
  };
};
export default function NewsDetail({ article }: Props) {
  const router = useRouter();
  return (
    <div className="max-w-7xl pt-32 pb-20 px-10 mx-auto">
      <div
        onClick={() => router.push("/#news")}
        className="flex items-center gap-1 cursor-pointer"
      >
        <ArrowBack />
        <span className="text-[15px] font-medium leading-[1.4]">
          新着情報一覧に戻る
        </span>
      </div>
      <div className="mt-10 max-w-[800px] mx-auto">
        <div className="mb-5 flex items-center gap-4 text-[15px]">
          <p className="text-black leading-none font-medium">
            {new Intl.DateTimeFormat("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.publishedAt))}
          </p>
          <p className="leading-none bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] rounded-[30px] px-[10px] py-[3px] text-white font-medium">
            プレスリリース
          </p>
        </div>
        <div>
          <h1 className="text-[#000000ff] font-bold text-[28px] leading-[1.3]">
            {article.title}
          </h1>
          <div className="mt-20 leading-[1.4] text-base">
            {Array.isArray(article.body) && (
              <PortableText
                value={article.body}
                components={{
                  types: {
                    image: ({ value }: { value: any }) => {
                      if (!value.asset?._ref) return null;
                      return (
                        <div className="my-14">
                          <Image
                            src={urlFor(value).url()}
                            alt="Article Image"
                            width={800}
                            height={600}
                            className="object-scale-down"
                          />
                        </div>
                      );
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
