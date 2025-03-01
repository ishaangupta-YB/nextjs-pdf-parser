"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/ToggleMode";
import { useToast } from "@/components/ui/use-toast";
import FileUpload from "@/components/FileUploader";
import Link from "next/link";
import { ArrowLeft, FileText, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [parsedText, setParsedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    toast({
      variant: "default",
      title: "File Uploaded",
      description: `${file.name} has been uploaded successfully.`,
    });
    setLoading(true);
  };

  const copyToClipboard = () => {
    if (parsedText) {
      navigator.clipboard.writeText(parsedText);
      toast({
        title: "Copied to clipboard",
        description: "The text has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div> 
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Upload Your PDF</CardTitle>
                  <CardDescription>
                    Drop your file here or click to browse
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/40 p-6 rounded-lg border border-dashed border-border">
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      setParsedText={(text: string) => {
                        setParsedText(text);
                        setLoading(false);
                      }}
                      maxSize={8 * 1024 * 1024}  
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Results
                  </CardTitle>
                  <CardDescription>
                    {uploadedFile ? (
                      <>
                        {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(2)} KB)
                      </>
                    ) : (
                      "Upload a PDF to see results here"
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                      <p className="mt-4 text-muted-foreground">Processing your PDF...</p>
                    </div>
                  ) : parsedText ? (
                    <>
                      <div className="h-[400px] overflow-y-auto rounded-md border border-border bg-muted/40 p-4">
                        <pre className="whitespace-pre-wrap font-mono text-sm">{parsedText}</pre>
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={copyToClipboard}>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Text
                        </Button> 
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <FileText className="h-16 w-16 text-muted-foreground/30 mb-4" />
                      <p className="text-muted-foreground">No results to display</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        Upload a PDF document to extract its text content
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
