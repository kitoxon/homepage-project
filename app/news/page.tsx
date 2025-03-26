import { fetchPost } from "@/sanity/lib/fetchPost";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";
import { PortableText } from "next-sanity";
export default async function NewsPage() {
  const news = await fetchPost();

  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {news.map((article: any) => (
          <div key={article.slug.current} className="border p-4 rounded-lg">
            <Image
              src={urlFor(article.mainImage).width(300).height(200).url()}
              alt={article.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
            <p className="text-sm">
              {new Intl.DateTimeFormat("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(article.publishedAt))}
            </p>
            {Array.isArray(article.body) && (
              <PortableText value={article.body} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
