import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getPostBySlug,
  getAllSlugs,
  formatFullDate,
  POST_IT_STYLES,
} from "@/lib/posts";

// ---------------------------------------------------------------------------
// Static generation: pre-render all known post slugs at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata for SEO
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const style = POST_IT_STYLES[post.color];

  return (
    <main className="min-h-screen">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to calendar
        </Link>
      </div>

      {/* Cover image */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-6">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Post header */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 mt-8 pb-20">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`h-3 w-3 rounded-full ${style.bg}`}
            aria-hidden="true"
          />
          <time className="text-sm text-white/40 font-mono">
            {formatFullDate(post.date)}
          </time>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-white/50">{post.excerpt}</p>

        {/* Separator */}
        <div className="my-8 h-px bg-white/10" />

        {/* Post body */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-emerald-400 prose-code:font-mono"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
