import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ToggleMode";
import Link from "next/link";
import { ArrowRight, FileText, Code, Shield, Zap, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PDF Parser</span>
          </div>
          <div className="flex items-center gap-8">
            <ModeToggle />
            <Link
              href="https://github.com/ishaangupta-YB/nextjs-pdf-parser"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Open Source
            </Link>
            <Link href="/dashboard">
              <Button>
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-26">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              PDF Text Extraction Made Simple
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Extract Text From PDFs
              <br />
              In Seconds
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              A powerful, open-source tool to effortlessly extract and parse
              text from any PDF document with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all"
                >
                  Start Parsing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> 

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extract text from any PDF in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-8 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="bg-background p-8 pt-12 rounded-xl border border-border shadow-md">
                <h3 className="text-xl font-semibold mb-3">Upload Your PDF</h3>
                <p className="text-muted-foreground">
                  Drag and drop your PDF file into the upload area or click to
                  browse your files
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-8 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="bg-background p-8 pt-12 rounded-xl border border-border shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Automatic Processing
                </h3>
                <p className="text-muted-foreground">
                  Our parser automatically extracts all text content from your
                  document
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-8 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="bg-background p-8 pt-12 rounded-xl border border-border shadow-md">
                <h3 className="text-xl font-semibold mb-3">Get Your Text</h3>
                <p className="text-muted-foreground">
                  View the extracted text and copy it to your clipboard or
                  download as needed
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="gap-2">
                Try It Yourself
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <span>
              © 2023 PDF Parser • Made with ❤️ by{" "}
              <a
                href="https://github.com/ishaangupta-YB"
                className="text-primary hover:underline"
              >
                ishaangupta-YB
              </a>{" "}
              •{" "}
            </span>
            <a
              href="https://github.com/ishaangupta-YB/nextjs-pdf-parser"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Open Source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
