import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";


const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Omotosho Ayomikun | Full Stack Developer",
    template: "%s | Omotosho Ayomikun",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. I build fast, scalable, and user-focused web applications with clean architecture and exceptional user experiences.",

  keywords: [
    "Omotosho Ayomikun",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST API",
    "Full Stack Engineer",
  ],

  authors: [
    {
      name: "Omotosho Ayomikun",
    },
  ],

  creator: "Omotosho Ayomikun",

  publisher: "Omotosho Ayomikun",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Omotosho Ayomikun | Full Stack Developer",
    description:
      "Building modern, scalable, and high-performance web applications using React, Next.js, Node.js, and TypeScript.",
    url: baseUrl,
    siteName: "Omotosho Ayomikun Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omotosho Ayomikun Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Omotosho Ayomikun | Full Stack Developer",
    description:
      "Building modern, scalable, and high-performance web applications with React, Next.js, Node.js, and TypeScript.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    // google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
