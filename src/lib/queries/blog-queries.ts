import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

/* ----------------------------------
 Types
---------------------------------- */
export type FetchBlogsParams = {
  start?: number;
  end?: number;
};

/* ----------------------------------
 Projections
---------------------------------- */
const blogCardProjection = `
{
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "heroImage": heroImage.asset->url,
  readTime,
  featured,
  publishedAt
}
`;

/* ----------------------------------
 Queries
---------------------------------- */
export const BLOGS_QUERY = defineQuery(`
  *[_type == "blog"]
  | order(publishedAt desc)
  [$start...$end]
  ${blogCardProjection}
`);

export const FEATURED_BLOGS_QUERY = defineQuery(`
  *[_type == "blog" && featured == true]
  | order(publishedAt desc)
  [0...3]
  ${blogCardProjection}
`);

export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    "slug": slug.current,
    "heroImage": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    readTime,
    publishedAt,
    body
  }
`);

/* ----------------------------------
 Fetch helpers
---------------------------------- */
export const fetchBlogs = async (params: FetchBlogsParams = {}) => {
  return client.fetch(BLOGS_QUERY, {
    start: params.start ?? 0,
    end: params.end ?? 12,
  });
};

export const fetchFeaturedBlogs = async () => {
  return client.fetch(FEATURED_BLOGS_QUERY);
};

export const fetchBlogBySlug = async (slug: string) => {
  return client.fetch(BLOG_BY_SLUG_QUERY, { slug });
};
