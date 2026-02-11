import Link from "next/link";
import Image from "next/image";

/**
 * Minimal sticky header — shows only the blog logo image.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center px-4 md:px-8">
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo.png"
            alt="Blog"
            width={180}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
