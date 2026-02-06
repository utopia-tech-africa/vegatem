import { fetchBlogs } from "@/lib/queries/blog-queries";
import { BlogCard } from "@/components/blog-card/blog-card";
import { FeaturedBlogs } from "@/components/featured-blogs/featured-blogs";
import { EmptyState } from "@/components/empty-state/empty-state";
import { FileText } from "lucide-react";
import { Metadata } from "next";

/**
 * =========================================================
 * 📰 BLOG PAGE METADATA — VEGATEM (UPDATED)
 * =========================================================
 */
export const metadata: Metadata = {
  /* --------------------------------------------------------
   * Page Title System
   * -------------------------------------------------------- */
  title: {
    default: "Vegatem Insights — Malaria Research, Treatment & Public Health",
    template: "%s | Vegatem® Insights",
  },

  /* --------------------------------------------------------
   * Description
   * -------------------------------------------------------- */
  description:
    "Vegatem Insights delivers research-backed articles, treatment guidance, and public health updates focused on malaria care in endemic regions. Trusted resources for healthcare providers, pharmacies, NGOs, and policymakers.",

  /* --------------------------------------------------------
   * SEO Keywords (Expanded, Medical-Safe)
   * -------------------------------------------------------- */
  keywords: [
    // Brand
    "Vegatem",
    "Vegatem Insights",
    "Panacea Pharmacy Limited",

    // Core malaria terms
    "malaria treatment",
    "antimalarial medicine",
    "malaria care",
    "malaria management",
    "malaria prevention",
    "malaria education",

    // Clinical & public health
    "malaria research",
    "evidence based malaria treatment",
    "public health malaria",
    "malaria case management",
    "healthcare malaria guidance",
    "clinical malaria insights",

    // Stakeholders
    "hospital malaria treatment",
    "pharmacy malaria supply",
    "NGO malaria programs",
    "public health initiatives Africa",
    "healthcare partnerships malaria",

    // Regional intent
    "Africa malaria treatment",
    "Ghana malaria care",
    "West Africa malaria health",
    "endemic malaria regions",

    // Content intent
    "medical blog malaria",
    "healthcare insights blog",
    "pharmaceutical education",
    "malaria awareness articles",
  ],

  /* --------------------------------------------------------
   * Canonical URL
   * -------------------------------------------------------- */
  alternates: {
    canonical: "https://www.vegatemgh.com/blog",
  },

  /* --------------------------------------------------------
   * Open Graph (Facebook, LinkedIn, WhatsApp)
   * -------------------------------------------------------- */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vegatemgh.com/blog",
    siteName: "Vegatem®",
    title: "Vegatem Insights — Malaria Research & Treatment Updates",
    description:
      "Explore trusted articles on malaria treatment, research developments, and public health strategies supporting patients and healthcare providers in endemic regions.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Vegatem Insights — Malaria care and treatment research",
      },
    ],
  },

  /* --------------------------------------------------------
   * Twitter Card
   * -------------------------------------------------------- */
  twitter: {
    card: "summary_large_image",
    title: "Vegatem Insights — Malaria Care & Public Health",
    description:
      "Research-backed insights and treatment guidance supporting malaria care across hospitals, pharmacies, NGOs, and public health programs.",
    images: ["/android-chrome-512x512.png"],
  },

  /* --------------------------------------------------------
   * Robots & Indexing
   * -------------------------------------------------------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
/**
 * =========================================================
 * END BLOG PAGE METADATA
 * =========================================================
 */

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
