import { fetchBlogBySlug } from "@/lib/queries/blog-queries";
import { BlogHeader } from "./components/blog-header";
import { BlogContent } from "./components/blog-content";
import { PostEmptyState } from "./components/post-empty-state";
import { FeaturedBlogs } from "@/components/featured-blogs/featured-blogs";
import type { Metadata } from "next";

/* ------------------------------------------------------------
 * Dynamic Blog Post Metadata (Vegatem)
 * ------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Vegatem®",
      description:
        "The requested article could not be found. Explore Vegatem Insights for trusted malaria research and treatment guidance.",
    };
  }

  const title = blog.title;
  const description = blog.excerpt;
  const url = `https://www.vegatemgh.com/blog/${slug}`;

  return {
    title,
    description,

    /* --------------------------------------------------------
     * Keywords (Expanded, Blog-Specific)
     * -------------------------------------------------------- */
    keywords: [
      "Vegatem",
      "Vegatem Insights",
      "malaria treatment",
      "antimalarial medicine",
      "malaria research",
      "malaria care",
      "clinical malaria guidance",
      "public health malaria",
      "hospital malaria treatment",
      "pharmacy malaria distribution",
      "NGO malaria programs",
      "Africa malaria care",
      "Ghana malaria treatment",
      title || "malaria article",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "Vegatem®",
      title: title || "malaria article",
      description:
        description || "Trusted insights on malaria treatment and research.",
      publishedTime: blog.publishedAt ?? undefined,
      images: blog.heroImage
        ? [
            {
              url: blog.heroImage,
              width: 1200,
              height: 630,
              alt: blog.title || undefined,
            },
          ]
        : [
            {
              url: "/android-chrome-512x512.png",
              width: 512,
              height: 512,
              alt: "Vegatem malaria treatment",
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title: title || "malaria article",
      description:
        description || "Trusted insights on malaria treatment and research.",
      images: blog.heroImage
        ? [blog.heroImage]
        : ["/android-chrome-512x512.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ------------------------------------------------------------
 * End of Dynamic Blog Post Metadata (Vegatem)
 * ------------------------------------------------------------ */

interface PageProps {
  params: Promise<{ slug: string }>;
}
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) return <PostEmptyState />;

  return (
    <>
      <article className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        <BlogHeader blog={blog} />
        <BlogContent body={blog.body} />
      </article>
      {/* FEATURED */}
      <FeaturedBlogs />
    </>
  );
}
