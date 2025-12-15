import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SEOStructuredData } from "@/components/seo-structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad Mehmood",
  description: "Senior Software Engineer with 4+ years of experience building scalable web applications. Expert in Nest.js, React, TypeScript, PostgreSQL, AWS, and microservices. Available for freelance and remote opportunities.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Nest.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "AWS Developer",
    "Microservices Developer",
    "Software Engineer Portfolio",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Saad Mehmood" }],
  creator: "Saad Mehmood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saadmehmood.dev",
    title: "Saad Mehmood | Senior Software Engineer",
    description: "Senior Software Engineer with 4+ years of experience building scalable web applications with Nest.js, React, PostgreSQL, and AWS.",
    siteName: "Saad Mehmood Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mehmood | Senior Software Engineer",
    description: "Senior Software Engineer with 4+ years of experience building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEOStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
