import { Footer } from "@/components/Footer";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HomePage />
      </main>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
