import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg"
    >
      {blog.heroImage && (
        <Image
          src={blog.heroImage}
          alt={blog.title}
          width={600}
          height={360}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5 space-y-3">
        {/* TAG */}
        <Badge variant="secondary" className="flex w-fit gap-1">
          <BookOpen className="h-3 w-3" />
          Blog
        </Badge>

        {/* TITLE */}
        <h3 className="font-semibold text-lg group-hover:underline">
          {blog.title}
        </h3>

        {/* EXCERPT */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {blog.excerpt}
        </p>

        {/* META */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
          {blog.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {blog.readTime} min read
            </span>
          )}

          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(blog.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
};
