import { notFound } from "next/navigation";
import { fetchSinglePost } from "@/sanity/lib/fetchSinglePost";
import NewsDetail from "@/components/News/NewsDetail";
type Params = Promise<{ id: string }>;

export default async function newsDetailPage(props: { params: Params }) {
  const { id } = await props.params;

  const article = await fetchSinglePost(id);
  if (!article) return notFound();
  return <NewsDetail article={article} />;
}
