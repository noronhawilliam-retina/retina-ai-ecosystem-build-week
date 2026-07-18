import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retina AI Ecosystem — One Operating Layer",
  description: "Seven AI products, two specialist networks and five ecosystem foundations, tools or ventures coordinated through one approval-first operating layer.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Retina AI Ecosystem",
    description: "7 AI products · 2 specialist networks · 5 foundations and tools",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Retina AI Ecosystem" }],
  },
  twitter: { card: "summary_large_image", title: "Retina AI Ecosystem", description: "7 AI products · 2 specialist networks · 5 foundations and tools", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
