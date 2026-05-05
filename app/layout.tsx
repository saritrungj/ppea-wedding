import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Pattree & Supatpong | E-Wedding Card",
  description: "Wedding invitation for Pattree and Supatpong, 19 July 2026.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pattree & Supatpong",
    description: "The celebration of love, 19 July 2026.",
    images: [
      {
       
        url: "https://wedding-sandy-eight.vercel.app/images/55.jpg",
        width: 1600,
        height: 1067
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#090706" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
