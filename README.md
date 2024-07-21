# nextjs-pdf-parser 📄✨

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![pdf2json](https://img.shields.io/badge/pdf2json-blue?style=for-the-badge)

## Try it out
### Live Link 🚀 - [https://nextjs-pdf-parser1.vercel.app/](https://nextjs-pdf-parser1.vercel.app/)

## Demo 

https://github.com/user-attachments/assets/81e86f76-f1f0-4648-9465-6efa120e3e28


## Overview 🚀

**nextjs-pdf-parser** is a Next.js template for seamless PDF parsing using `pdf2json`. It is designed for developers seeking a ready-to-use solution for PDF content extraction in Next.js projects.

## Features 🌟 

- PDF parsing using the `pdf2json` library
- Custom file uploading with drag and drop functionality using `react-dropzone` and `shadcn` 
- Easy to extend and customize

## Tech Stack

**Nextjs(App Router) with Tailwind CSS and Shadcn**

## Getting Started 🛠️

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
      git clone https://github.com/ishaangupta-YB/nextjs-pdf-parser.git
      cd nextjs-pdf-parser
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000) to see the result.

## Usage 📖

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Example Code

```jsx
'use client

import React, { useState } from "react";
import { useToast } from "./ui/use-toast"; 
import FileUpload from "./FileUploader"; 

const PDFParser = () => {
  
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [parsedText, setParsedText] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(() => {
      return file;
    }); 
    toast({
      variant: "default",
      title: "File Uploaded",
      description: `${file.name} has been uploaded successfully.`,
    });
    setLoading(true);
  };
   return (
      <>
          <FileUpload
              onFileUpload={handleFileUpload}
              setParsedText={(text: string) => {
                setParsedText(text);
                setLoading(false);
              }}
              maxSize={8 * 1024 * 1024} // 8 MB
            />
        {loading && (
          <div className="mt-6 flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        )}
        {parsedText && (
          <div className="mt-6 w-full max-w-3xl bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Parsed Text</h3>
            <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              {parsedText}
            </p>
          </div>
        )}
    </>
};

export default PDFParser;
```

or you can simply import HomePage like below

```
import React from "react"; 
import HomePage from "./HomePage"; 

const Home = () => {
  return <HomePage/>
}
```

## Authors

- [@ishaangupta-yb](https://www.github.com/ishaangupta-yb)

## Contributing

Contributions are always welcome!

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [ishaangupta-YB](https://github.com/ishaangupta-YB).
