import { client } from "./client";

export async function fetchPost() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    body,
    mainImage,
    publishedAt
  }`;

  return await client.fetch(query);
}
