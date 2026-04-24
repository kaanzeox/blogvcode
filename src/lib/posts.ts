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
    slug: "the-gambler-dostoevsky",
    date: "2026-04-24",
    title: "The Gambler by Dostoevsky",
    excerpt: "Thoughts on Kumarbaz",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/The_Gambler_%28novel%29_1866_first_edition_cover.jpg",
    content: `
      <p>I just finished reading The Gambler by Dostoevsky and it hit different than I expected. The book is short compared to his other novels but it packs so much into it. The main character Alexei is a tutor who falls in love with a woman he can't have and becomes addicted to roulette. The way Dostoevsky writes about gambling addiction feels so real that it makes you uncomfortable.</p>
      <p>What surprised me the most is that Dostoevsky wrote this entire book in 26 days just to pay off his own gambling debts. Knowing that makes the story feel even more personal and raw. You can feel the desperation in every page.</p>
      <p>It is not as heavy as Crime and Punishment or The Brothers Karamazov but it is still Dostoevsky. The characters are flawed and real and the ending doesn't give you a happy resolution. If you want a quick read that will make you think about obsession and self-destruction this is it.</p>
    `,
    color: "purple",
  },
  {
    slug: "traitors-turkiye",
    date: "2026-04-17",
    title: "The Traitors Türkiye",
    excerpt: "Turkey's new reality show",
    coverImage:
      "https://i.ytimg.com/vi/8-5IRtW-zyc/maxresdefault.jpg",
    content: `
      <p>I started watching The Traitors Türkiye on Kanal D and honestly I didn't expect to like it this much. I already knew the format from the US and UK versions but seeing Turkish celebrities play this game is a completely different experience. The whole concept of traitors secretly eliminating people while everyone tries to figure out who is lying is so simple but so addictive.</p>
      <p>The cast is interesting because you have names like Pascal Nouma and Yusuf Güney which makes it fun to watch. Giray Altınok as the host does a solid job and the castle in Belgium looks amazing. The production quality is surprisingly high for a Turkish reality show.</p>
      <p>My only complaint is that some contestants are too obvious with their strategies. But that might change as the show goes on. If you like strategy games and don't mind reality TV this is probably the best thing on Turkish television right now.</p>
    `,
    color: "orange",
  },
  {
    slug: "the-drama-review",
    date: "2026-04-10",
    title: "The Drama Review",
    excerpt: "Zendaya and Pattinson A24 film",
    coverImage:
      "https://i.ytimg.com/vi/6zmKcUa4Xxk/maxresdefault.jpg",
    content: `
      <p>I watched The Drama last week and I have to say it was one of the most uncomfortable movie experiences I have had in a while. The idea of a couple's perfect life falling apart because of one confession at a dinner party is both simple and terrifying. Zendaya and Robert Pattinson together sounded like a dream cast and they really delivered.</p>
      <p>What makes this movie interesting is how it forces you to think about forgiveness and how much you really know about the people you love. The confession scene hit hard and the rest of the movie keeps that tension alive without letting go. It is an A24 movie so the quality and the atmosphere are exactly what you expect.</p>
      <p>I wrote about A24 a few weeks ago and how they are getting too mainstream. But movies like The Drama remind me why I started following them in the first place. This is exactly the kind of uncomfortable and thought provoking story that A24 does best.</p>
    `,
    color: "blue",
  },
  {
    slug: "ready-or-not-2-review",
    date: "2026-04-03",
    title: "Ready or Not 2 Review",
    excerpt: "Does the sequel deliver",
    coverImage:
      "https://i.ytimg.com/vi/jczr0KCloXk/maxresdefault.jpg",
    content: `
      <p>I went to see Ready or Not 2 in theaters last week because I loved the first one so much. The sequel picks up right where the first movie ended and the scale is much bigger this time. Instead of one family hunting Grace there are now four families competing for some kind of throne.</p>
      <p>Honestly it was fun but not as good as the original. The first movie worked because it was simple and tight. This one tries to do too much and loses some of that charm. Samara Weaving is still great and Kathryn Newton as her sister was a nice addition. But the story got too complicated for what should be a straightforward survival movie.</p>
      <p>I don't regret watching it in the cinema but I think they should have kept it smaller. Sometimes bigger is not better. The first Ready or Not was special because it was small and focused. This one felt like a regular action movie with too many characters.</p>
    `,
    color: "green",
  },
  {
    slug: "ready-or-not-review",
    date: "2026-03-27",
    title: "Ready or Not Review",
    excerpt: "A fun deadly wedding game",
    coverImage:
      "https://i.ytimg.com/vi/ZtYTwUxhAoI/maxresdefault.jpg",
    content: `
      <p>I rewatched Ready or Not before going to see the sequel and I forgot how good this movie is. The idea is simple but genius. A bride plays a game of hide and seek with her rich in-laws but the game is actually deadly. Samara Weaving carries the whole movie and she is amazing in it.</p>
      <p>What I love about this movie is that it doesn't take itself too seriously. It is scary but also funny at the same time. The kills are creative and the ending is one of the most satisfying endings I have seen in a horror movie. The whole movie is only 90 minutes and it doesn't waste a single minute.</p>
      <p>If you haven't watched it yet I really recommend it especially before watching the sequel. It is one of those movies that makes you think why don't they make more movies like this.</p>
    `,
    color: "yellow",
  },
  {
    slug: "the-housemaid-review",
    date: "2026-03-20",
    title: "The Housemaid Review",
    excerpt: "Sydney Sweeney thriller thoughts",
    coverImage:
      "https://i.ytimg.com/vi/48CtX6OgU3s/maxresdefault.jpg",
    content: `
      <p>I finally watched The Housemaid after hearing about it everywhere. Sydney Sweeney is in everything these days and I was curious if this movie actually deserves the hype or if it is just another average thriller with a famous face.</p>
      <p>To be honest it was better than I expected. The story keeps you guessing and the twists actually surprised me. Amanda Seyfried was really good in her role and the tension between the characters felt real. It is not the most original story in the world but the way they built the suspense made it work.</p>
      <p>My only problem is that some parts felt a bit too dramatic like they were trying too hard. But overall I think it is a solid movie. If you like thrillers with some dark twists this one is worth watching. I get why it made so much money at the box office.</p>
    `,
    color: "purple",
  },
  {
    slug: "hangover-trilogy",
    date: "2026-03-13",
    title: "The Hangover Trilogy",
    excerpt: "Still the best comedy series",
    coverImage:
      "https://i.ytimg.com/vi/jj6wcUes1no/maxresdefault.jpg",
    content: `
      <p>I watched the Hangover trilogy again last week and honestly it still holds up. The first movie is one of those rare comedies that never gets old no matter how many times you watch it. The Vegas chaos, the tiger, Mr. Chow, everything about it is perfect. I still laugh at scenes I have already seen twenty times.</p>
      <p>The second movie is basically the same movie in Bangkok but I still enjoyed it. It was not as surprising as the first one but the chemistry between Bradley Cooper, Ed Helms and Zach Galifianakis keeps it fun. The third one is where things go wrong. They tried to do something different and it just didn't work. It felt like they ran out of ideas and just wanted to end the series.</p>
      <p>Still even with two weaker sequels the first Hangover is enough to make this trilogy worth it. Not many comedy movies can make you laugh this hard after all these years.</p>
    `,
    color: "green",
  },
  {
    slug: "maxxxine-review",
    date: "2026-03-06",
    title: "maXXXine Review",
    excerpt: "Subjective Maxxxine review",
    coverImage:
      "https://hips.hearstapps.com/hmg-prod/images/halsey-mia-goth-maxxxine-6683caabb54bf.jpg?crop=1.00xw:0.846xh;0,0.0967xh",
    content: `
      <p>I finally watched MaXXXine, the final movie of the trilogy after Pearl and X. I was very excited after seeing the trailers, but I didn't have the chance to watch it when it first came out. Even though a lot of time has passed, I had high expectations.</p>
      <p>Compared to the first two movies, I think the story was disappointing. If Mia Goth wasn't the lead, I wouldn't even call this a sequel because everything felt so disconnected. Since it is an A24 production, the cinematography is great and the quality is very high, as expected. However, I'm sad that such a good series ended this way. After two great movies, it deserved a better ending.</p>
    `,
    color: "pink",
  },
  {
    slug: "alice-in-borderland-season-3",
    date: "2026-02-27",
    title: "Alice in Borderland Season 3",
    excerpt: "New season review",
    coverImage:
      "https://images.immediate.co.uk/production/volatile/sites/3/2025/02/Alice-in-Borderlands-27ad01d.jpg",
    content: `
      <p>Even though it has been out for a while, I just watched the final season of Alice in Borderland Season 3. Like many people, I thought Season 2 was the end. I believed the Joker card at the end was just something the producers added in case they wanted to change their minds later.</p>
      <p>When I started watching this new season which came out quite late I had forgotten many details except the main plot. However, I didn't have much trouble because the new season doesn't focus too much on old stories.</p>
      <p>Personally, even though I don't usually like Asian productions, I find the story and content of Alice in Borderland very clever. It is clear that they thought about every detail, and this continues in the new season.</p>
      <p>Although it is not as good as the previous seasons, I can say it was a satisfying final season. It didn't surpass the quality of the earlier seasons, but I don't regret watching it. The cinematography and use of colors are still excellent. In every episode, the show reminds you that it is not just a cheap Netflix series.</p>
    `,
    color: "blue",
  },
  {
    slug: "is-a24-overrated",
    date: "2026-02-20",
    title: "Is A24 Become Overrated?",
    excerpt: "After last hits and Turkey theaters",
    coverImage:
      "https://static.wikia.nocookie.net/filmguide/images/4/46/A24.png/revision/latest?cb=20230101000000",
    content: `
      <p>To be honest, A24 getting so famous and showing up in Turkish theaters really bothers me. Seeing almost every A24 movie in every mall cinema feels weird. In a country where many things get banned or face backlash, A24 has scenes that are way too much for the general audience here. Their dark and strange style doesn't really fit the average moviegoer in Turkey. It's not the kind of popcorn movie you watch just to relax on the weekend.</p>
      <p>A24 never really tried to be just aesthetic or mainstream, but I think that changed after Talk to Me became a huge hit. Still, let's be real, A24 is not overrated yet. They just became very popular, which makes those of us who followed them from the start feel a bit protective. They are still taking risks and telling weird stories. It's just that now the door is open to everyone, and the crowd can be annoying. I really hope that even with a famous cast in Marty Supreme, they don't lose their soul to the mainstream. I want them to keep surprising us like they used to.</p>
    `,
    color: "orange",
  },
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
