import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/footer/footer";
import Script from "next/script";

/* Satoshi */
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

/* Clash Display */
const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-Medium.otf", weight: "500" },
    { path: "../../public/fonts/ClashDisplay-Semibold.otf", weight: "600" },
    { path: "../../public/fonts/ClashDisplay-Bold.otf", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  /* ------------------------------------------------------------
   * Basic SEO
   * ------------------------------------------------------------ */
  title: {
    default: "Vegatem® | Tough on Malaria, Easy on You",
    template: "%s | Vegatem®",
  },
  description:
    "Vegatem® is a proven malaria treatment designed for patients in endemic regions. Effective, accessible care supporting hospitals, pharmacies, NGOs, and public health initiatives worldwide.",

  /* ------------------------------------------------------------
   * Application & Brand Info
   * ------------------------------------------------------------ */
  applicationName: "Vegatem",
  generator: "Next.js",
  authors: [{ name: "Panacea Pharmacy Limited" }],
  creator: "Panacea Pharmacy Limited",
  publisher: "Panacea Pharmacy Limited",
  category: "Health",

  /* ------------------------------------------------------------
   * Keywords
   * ------------------------------------------------------------ */
  keywords: [
    "Vegatem",
    "malaria treatment",
    "antimalarial medicine",
    "malaria care",
    "healthcare partnerships",
    "pharmacy distribution",
    "hospital malaria treatment",
    "NGO healthcare partnerships",
    "malaria endemic regions",
    "Africa malaria treatment",
    "Ghana pharmaceutical distribution",
  ],

  /* ------------------------------------------------------------
   * Canonical & Language Alternatives
   * ------------------------------------------------------------ */
  alternates: {
    canonical: "https://www.vegatemgh.com",
    languages: {
      "en-US": "https://www.vegatemgh.com",
    },
  },

  /* ------------------------------------------------------------
   * Open Graph (Facebook, LinkedIn, WhatsApp)
   * ------------------------------------------------------------ */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vegatemgh.com",
    siteName: "Vegatem®",
    title: "Vegatem® | Tough on Malaria, Easy on You",
    description:
      "Effective, accessible malaria treatment for endemic regions. Vegatem® supports patients, pharmacies, hospitals, and NGOs in the fight against malaria.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Vegatem malaria treatment",
      },
    ],
  },

  /* ------------------------------------------------------------
   * Twitter Card
   * ------------------------------------------------------------ */
  twitter: {
    card: "summary_large_image",
    title: "Vegatem® | Tough on Malaria, Easy on You",
    description:
      "Proven malaria treatment for endemic regions. Partner with Vegatem® to expand access to life-saving care.",
    images: ["/android-chrome-512x512.png"],
  },

  /* ------------------------------------------------------------
   * Robots & Indexing
   * ------------------------------------------------------------ */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ------------------------------------------------------------
   * Icons & PWA
   * ------------------------------------------------------------ */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  /* ------------------------------------------------------------
   * Metadata Base
   * ------------------------------------------------------------ */
  metadataBase: new URL("https://www.vegatemgh.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body
        className={`${satoshi.variable} ${clashDisplay.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
