import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import ScrollReveal from "./scroll-reveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arun Kumar | Full-Stack Developer",
  description:
    "Arun Kumar is a full-stack developer building AI, e-commerce, CRM, healthcare, and automation products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
