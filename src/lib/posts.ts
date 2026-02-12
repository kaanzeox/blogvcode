/**
 * Blog post data layer.
 *
 * Each post is tied to a specific Friday date (YYYY-MM-DD).
 * The calendar grid generates all Fridays for the semester,
 * then looks up whether a post exists for that date.
 *
 * To add a new post, just add an entry to the POSTS array below.
 */

export interface BlogPost {
  /** URL-friendly identifier, e.g. "my-first-post" */
  slug: string;
  /** The Friday this post belongs to (ISO date string YYYY-MM-DD) */
  date: string;
  /** Post title shown on the post-it note and on the post page */
  title: string;
  /** Short excerpt shown on the post-it note (keep it ≤ 80 chars) */
  excerpt: string;
  /** Hero image URL shown at the top of the post page */
  coverImage: string;
  /** Full post content in HTML */
  content: string;
  /** Post-it note accent color */
  color: PostItColor;
}

/**
 * Available post-it note colors.
 * Each maps to a set of tailwind classes that replicate real sticky-note paper.
 */
export type PostItColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "orange"
  | "purple";

export const POST_IT_STYLES: Record<
  PostItColor,
  { bg: string; text: string; border: string }
> = {
  yellow: {
    bg: "bg-[#fef08a]",
    text: "text-[#422006]",
    border: "border-[#eab308]/20",
  },
  pink: {
    bg: "bg-[#fda4af]",
    text: "text-[#4c0519]",
    border: "border-[#e11d48]/20",
  },
  blue: {
    bg: "bg-[#a5d8ff]",
    text: "text-[#0c2d48]",
    border: "border-[#3b82f6]/20",
  },
  green: {
    bg: "bg-[#bbf7d0]",
    text: "text-[#052e16]",
    border: "border-[#22c55e]/20",
  },
  orange: {
    bg: "bg-[#fed7aa]",
    text: "text-[#431407]",
    border: "border-[#f97316]/20",
  },
  purple: {
    bg: "bg-[#ddd6fe]",
    text: "text-[#2e1065]",
    border: "border-[#8b5cf6]/20",
  },
};

// ---------------------------------------------------------------------------
// Posts — add new entries here, newest first.
// ---------------------------------------------------------------------------

export const POSTS: BlogPost[] = [
  {
    slug: "praise-you",
    date: "2026-02-13",
    title: "Praise You",
    excerpt: "Subjective ideas about Praise You",
    coverImage:
      "https://i.ytimg.com/vi/1BoXlv-TV2c/maxresdefault.jpg",
    content: `
      <p>Watching Fatboy Slim's "Praise You" music video was honestly a huge surprise for me because I never expected such a messy and "amateur style" (that's what I felt) work from a visionary like Spike Jonze. Knowing he later directed deep, visually stunning movies like <em>Being John Malkovich</em> or <em>Her</em>, this clip felt very different.</p>
      <p>As someone who loves the clean and organized look of digital design and photography, this intentional chaos and weird street energy isn't really my style. However, seeing Jonze's genius in such a raw and unfiltered way gave me a very different impression.</p>
      <p>Even though I usually look for perfect compositions, seeing a simple, unplanned idea become more powerful than technical perfection was a really strange but interesting experience.</p>
    `,
    color: "yellow",
  },
];

// ---------------------------------------------------------------------------
// Semester configuration
// ---------------------------------------------------------------------------

/** First Friday of the semester */
export const SEMESTER_START = "2026-02-13";

/** Last Friday of the semester (inclusive) — 14 weeks total */
export const SEMESTER_END = "2026-05-15";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Generates every Friday between start and end (inclusive).
 * Returns ISO date strings sorted chronologically.
 */
export function getAllFridays(
  startDate: string = SEMESTER_START,
  endDate: string = SEMESTER_END
): string[] {
  const fridays: string[] = [];
  const current = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");

  // Align to the first Friday on or after startDate
  while (current.getDay() !== 5) {
    current.setDate(current.getDate() + 1);
  }

  while (current <= end) {
    // Use local date parts to avoid UTC timezone shift from toISOString()
    const y = current.getFullYear();
    const m = String(current.getMonth() + 1).padStart(2, "0");
    const d = String(current.getDate()).padStart(2, "0");
    fridays.push(`${y}-${m}-${d}`);
    current.setDate(current.getDate() + 7);
  }

  return fridays;
}

/** Lookup a post by its Friday date. Returns undefined if no post exists. */
export function getPostByDate(date: string): BlogPost | undefined {
  return POSTS.find((p) => p.date === date);
}

/** Lookup a post by slug. Returns undefined if not found. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Returns all published post slugs (for static generation). */
export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const DAYS_EN = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/**
 * Formats a date string into display parts.
 * e.g. "2026-02-13" → { month: "February", day: "13" }
 */
export function formatDate(dateStr: string): { month: string; day: string } {
  const date = new Date(dateStr + "T00:00:00");
  return {
    month: MONTHS_EN[date.getMonth()],
    day: String(date.getDate()).padStart(2, "0"),
  };
}

/**
 * Formats a full date string for the blog post page.
 * e.g. "2026-02-13" → "February 13, 2026 · Friday"
 */
export function formatFullDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return `${MONTHS_EN[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} · ${DAYS_EN[date.getDay()]}`;
}
