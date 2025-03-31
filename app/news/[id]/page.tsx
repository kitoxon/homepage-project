import { notFound } from "next/navigation";
import { fetchSinglePost } from "@/sanity/lib/fetchSinglePost";
import NewsDetail from "@/components/News/NewsDetail";
import { getPlainText } from "@/utils/function";
type Params = Promise<{ id: string }>;

export async function generateMetadata(props: { params: Params }) {
  const { id } = await props.params;
  const article = await fetchSinglePost(id);

  if (!article) return { title: "記事が見つかりません" };

  return {
    title: `${article.title} | お知らせ | NextStairs`,
    description: getPlainText(article.body).slice(0, 80),
    openGraph: {
      title: article.title,
      description: getPlainText(article.body).slice(0, 80),
      images: [
        {
          url: article.mainImage
            ? article.mainImage.asset.url
            : "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function newsDetailPage(props: { params: Params }) {
  const { id } = await props.params;

  const article = await fetchSinglePost(id);
  if (!article) return notFound();
  return <NewsDetail article={article} />;
}
