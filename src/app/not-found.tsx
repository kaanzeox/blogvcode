import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-white/50">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
      >
        Back to calendar
      </Link>
    </main>
  );
}
