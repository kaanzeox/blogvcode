import type { BlogPost } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import { PostItCard } from "./post-it-card";

interface CalendarCellProps {
  date: string;
  post: BlogPost | undefined;
  isPast: boolean;
}

/**
 * A single cell in the calendar grid.
 * Shows the date at the bottom, and either:
 *   - A post-it card if a post exists for that date
 *   - "TBA" if the date is in the future and no post yet
 *   - "—" if the date is past and no post was published
 */
export function CalendarCell({ date, post, isPast }: CalendarCellProps) {
  const { month, day } = formatDate(date);

  return (
    <div className="relative flex flex-col border-r border-b border-white/10 min-h-[200px] md:min-h-[240px] overflow-hidden group/cell">
      {/* Post-it card or TBA label */}
      <div className="flex-1 flex items-center justify-center relative">
        {post ? (
          <PostItCard post={post} />
        ) : (
          <span className="text-sm md:text-base font-medium text-white/30 tracking-widest select-none">
            {isPast ? "—" : "TBA"}
          </span>
        )}
      </div>

      {/* Separator */}
      <div className="h-px bg-white/10" />

      {/* Date footer */}
      <div className="px-3 py-2 md:px-4 md:py-3">
        <span className="text-xs text-white/40 font-medium tracking-wide">
          {month}
        </span>
        <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none mt-0.5">
          {day}
        </div>
      </div>
    </div>
  );
}

