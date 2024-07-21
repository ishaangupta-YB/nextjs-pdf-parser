import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          &copy; 2024 Designed and developed by
          <Link
            target="_blank"
            href="https://github.com/ishaangupta-yb"
            className="text-primary transition-all border-primary hover:border-b-2 ml-1"
          >
            Ishaan Gupta
          </Link>
        </p>
      </div>
    </div>
  );
}
