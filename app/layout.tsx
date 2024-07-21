import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs PDF Parser",
  description:
    "A Next.js template for parsing PDFs, created by Ishaan Gupta to simplify PDF parsing using pdf2json and react-dropzone.",
  keywords:
    "Next.js, PDF Parser, PDF Parsing, pdf2json, react-dropzone, Ishaan Gupta, GitHub,ishaangupta-yb,ishaangupta1201, nextjs-pdf-parser, template",
  authors: [{ name: "Ishaan Gupta", url: "https://github.com/ishaangupta-yb" }],
  openGraph: {
    type: "website",
    url: "https://github.com/ishaangupta-yb",
    title: "Next.js PDF Parser",
    description:
      "A Next.js template for parsing PDFs, created by Ishaan Gupta to simplify PDF parsing using pdf2json and react-dropzone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
          {children}
          <Toaster />
      </body>
    </html>
  );
}
