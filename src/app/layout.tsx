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
  title: "Saad Mehmood | Senior Software Engineer | Full Stack Developer",
  description: "Saad Mehmood - Senior Software Engineer with 4+ years of experience building scalable web applications. Expert in Nest.js, React, Next.js, TypeScript, PostgreSQL, AWS, and microservices. Available for freelance and remote opportunities.",
  keywords: [
    "Saad Mehmood",
    "Saad Mehmood Developer",
    "Saad Mehmood Software Engineer",
    "Saad Mehmood Portfolio",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Nest.js Developer",
    "NestJS Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "MongoDB Developer",
    "AWS Developer",
    "Azure Developer",
    "Microservices Developer",
    "API Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer Portfolio",
    "Remote Developer",
    "Freelance Developer",
    "Lahore Developer",
    "Pakistan Developer",
  ],
  authors: [{ name: "Saad Mehmood" }],
  creator: "Saad Mehmood",
  publisher: "Saad Mehmood",
  metadataBase: new URL("https://saadmehmood.dev"),
  alternates: {
    canonical: "https://saadmehmood.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saadmehmood.dev",
    title: "Saad Mehmood | Senior Software Engineer | Full Stack Developer",
    description: "Saad Mehmood - Senior Software Engineer with 4+ years of experience building scalable web applications with Nest.js, React, Next.js, PostgreSQL, and AWS.",
    siteName: "Saad Mehmood Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mehmood | Senior Software Engineer",
    description: "Senior Software Engineer with 4+ years of experience building scalable web applications with Nest.js, React, and PostgreSQL.",
    creator: "@saadmehmood",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "uKOwib6S2W06MI_v8Z3M10HQpHCjyZrfo9eh",
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
