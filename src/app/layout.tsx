import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Vegatem",
  description: "Tough on malaria, Easy on you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${clashDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
