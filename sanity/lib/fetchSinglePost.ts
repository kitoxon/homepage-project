import { client } from "./client";

export async function fetchSinglePost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      body,
      mainImage,
      publishedAt,
      categories[]->{
        title,
        slug
      }
    }`;
  return await client.fetch(query, { slug });
}
