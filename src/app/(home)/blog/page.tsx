import { fetchBlogs } from "@/lib/queries/blog-queries";
import { BlogCard } from "@/components/blog-card/blog-card";
import { FeaturedBlogs } from "@/components/featured-blogs/featured-blogs";
import { EmptyState } from "@/components/empty-state/empty-state";
import { FileText } from "lucide-react";

export const revalidate = 60;
export default async function BlogPage() {
  const blogs = await fetchBlogs({ end: 12 });

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 space-y-16">
      {/* HERO */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold font-clash">Vegatem Insights</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Research-backed insights, updates, and educational resources on
          malaria care.
        </p>
      </header>

      {/* GRID / EMPTY STATE */}
      {blogs.length === 0 ? (
        <EmptyState
          title="No articles published yet"
          description="We’re preparing evidence-based insights and updates on malaria care. Please check back soon."
          icon={<FileText className="h-6 w-6" />}
        />
      ) : (
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </section>
      )}
    </main>
  );
}
