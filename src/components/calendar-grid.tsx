import { getAllFridays, getPostByDate } from "@/lib/posts";
import { CalendarCell } from "./calendar-cell";

/**
 * The main calendar grid that shows every Friday of the semester.
 * Each Friday gets a cell; cells with published posts show a post-it note.
 *
 * Layout:
 *   - Desktop: 5 columns
 *   - Tablet: 3 columns
 *   - Mobile: 2 columns
 */
export function CalendarGrid() {
  const fridays = getAllFridays();
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 border-l border-t border-white/10">
      {fridays.map((date) => {
        const post = getPostByDate(date);
        const isPast = date < today;

        return <CalendarCell key={date} date={date} post={post} isPast={isPast} />;
      })}
    </div>
  );
}

