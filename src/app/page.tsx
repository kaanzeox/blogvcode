import { CalendarGrid } from "@/components/calendar-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-screen-2xl mx-auto py-8 md:py-12">
        <CalendarGrid />
      </section>
    </main>
  );
}
