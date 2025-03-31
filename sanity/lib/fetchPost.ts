import { client } from "./client";

export async function fetchPost(limit?: number) {
  const range = typeof limit === "number" ? `[0...${limit}]` : "";
  const query = `*[_type == "post"] | order(publishedAt desc)${range} {
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    categories[]->{
      title,
      slug
    }
  }`;

  return await client.fetch(query);
}
