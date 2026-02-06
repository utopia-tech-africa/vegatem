"use client";

import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portable-text/portable-text-components";

export const BlogContent = ({ body }: { body: any }) => {
  return (
    <section className="prose max-w-none">
      <PortableText value={body} components={portableTextComponents} />
    </section>
  );
};
