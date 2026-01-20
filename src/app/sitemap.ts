import type { MetadataRoute } from "next";

const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vegatemgh.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,

      /* ------------------------------------------------------------
       * Image Sitemap
       * ------------------------------------------------------------ */
      images: [
        `${baseUrl}/android-chrome-512x512.png`,
        `${baseUrl}/android-chrome-192x192.png`,
        `${baseUrl}/apple-touch-icon.png`,
      ],
    },
  ];
}
