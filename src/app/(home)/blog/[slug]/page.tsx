import { fetchBlogBySlug } from "@/lib/queries/blog-queries";
import { BlogHeader } from "./components/blog-header";
import { BlogContent } from "./components/blog-content";
import { PostEmptyState } from "./components/post-empty-state";
import { FeaturedBlogs } from "@/components/featured-blogs/featured-blogs";

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
