import { defineType, defineField } from "sanity";
import { BookOpen } from "lucide-react";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: BookOpen,

  fields: [
    // TITLE (H1)
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // SLUG
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // EXCERPT
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short summary for previews and cards",
      validation: (Rule) => Rule.required(),
    }),

    // OPTIONAL HERO IMAGE
    defineField({
      name: "heroImage",
      title: "Hero Image (Optional)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Required if image is set (SEO & accessibility)",
          validation: (Rule) =>
            Rule.custom((alt, context) => {
              if (context.parent && !alt) {
                return "Alt text is required when an image is provided";
              }
              return true;
            }),
        }),
      ],
    }),

    // BODY (RICH TEXT + IMAGES)
    defineField({
      name: "body",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Important for SEO and accessibility",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // READ TIME
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      description: "Estimated reading time",
    }),

    // FEATURED
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),

    // PUBLISHED DATE
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "heroImage",
      category: "category.title",
      published: "publishedAt",
    },
    prepare({ title, media, category, published }) {
      return {
        title,
        media,
        subtitle: `${category ?? "Uncategorized"} • ${new Date(
          published,
        ).toLocaleDateString()}`,
      };
    },
  },
});
