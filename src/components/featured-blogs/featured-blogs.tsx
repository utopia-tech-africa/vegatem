import Link from "next/link";
import { BlogCard } from "@/components/blog-card/blog-card";
import { fetchFeaturedBlogs } from "@/lib/queries/blog-queries";

export const FeaturedBlogs = async () => {
  const blogs = await fetchFeaturedBlogs();

  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-clash">Featured Articles</h2>
          <Link
            href="/blog"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog: any) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
