import { client } from "./client";

export async function fetchPost(limit: number) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    title,
    slug,
    body,
    mainImage,
    publishedAt
  }`;

  return await client.fetch(query);
}
