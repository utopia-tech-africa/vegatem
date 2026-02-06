import type { MetadataRoute } from "next";
import { fetchBlogs } from "@/lib/queries/blog-queries";

const dynamic = "force-dynamic";

const SITE_URL = "https://www.vegatemgh.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetchBlogs({ end: 100 });

  /* ------------------------------------------------------------
   * Static Routes
   * ------------------------------------------------------------ */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${SITE_URL}/android-chrome-512x512.png`,
        `${SITE_URL}/android-chrome-192x192.png`,
        `${SITE_URL}/apple-touch-icon.png`,
      ],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* ------------------------------------------------------------
   * Blog Routes (WITH images for SEO)
   * ------------------------------------------------------------ */
  const blogRoutes: MetadataRoute.Sitemap =
    blogs?.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,

      images: post.heroImage ? [post.heroImage] : [],
    })) ?? [];

  return [...staticRoutes, ...blogRoutes];
}
