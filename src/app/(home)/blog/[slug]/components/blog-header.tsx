import Image from "next/image";
import { Calendar, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const BlogHeader = ({ blog }: { blog: any }) => {
  return (
    <header className="space-y-6">
      <Badge variant="secondary" className="flex w-fit gap-1">
        <BookOpen className="h-3 w-3" />
        Blog
      </Badge>

      <h1 className="text-4xl md:text-5xl font-extrabold font-clash">
        {blog.title}
      </h1>

      <p className="text-muted-foreground text-lg">{blog.excerpt}</p>

      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {new Date(blog.publishedAt).toLocaleDateString()}
        </span>

        {blog.readTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {blog.readTime} min read
          </span>
        )}
      </div>

      {blog.heroImage && (
        <div className="overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src={blog.heroImage}
            alt={blog.heroImageAlt || ""}
            width={1200}
            height={630}
            priority
            className="w-full object-cover"
          />
        </div>
      )}
    </header>
  );
};
