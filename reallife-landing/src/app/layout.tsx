import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "ReaLife - Break Free from Endless Scrolling",
  description: "ReaLife helps you reclaim your time, focus, and ambition—one notification at a time. Transform your digital habits with AI-powered coaching.",
  keywords: ["digital wellness", "productivity", "social media addiction", "screen time", "focus"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
