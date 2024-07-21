"use client";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FileUpload from "./FileUploader";

function HomePage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [parsedText, setParsedText] = useState("");
  const [open, setOpen] = useState(false);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(() => {
      return file;
    });

    setOpen(() => {
      return false;
    });
    toast({
      variant: "default",
      title: "File Uploaded",
      description: `${file.name} has been uploaded successfully.`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="bg-black hover:bg-gray-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Upload File
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded shadow-md">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-bold">
              Upload your file
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FileUpload
              onFileUpload={handleFileUpload}
              setParsedText={setParsedText}
              maxSize={8 * 1024 * 1024} // 8 MB
            />
          </div>
        </DialogContent>
      </Dialog>
      {parsedText && (
        <div className="mt-6 w-full max-w-3xl bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Parsed Text</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
            {parsedText}
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;

