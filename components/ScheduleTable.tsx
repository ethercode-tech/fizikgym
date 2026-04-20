import { ScheduleItem } from "@/lib/types";

type ScheduleTableProps = {
  schedules: ScheduleItem[];
};

type ShiftBucket = {
  id: "morning" | "afternoon";
  label: string;
  days: string[];
  starts: number[];
  ends: number[];
};

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.trim().split(":").map((value) => Number(value));
  return (hours * 60) + (minutes || 0);
}

function formatMinutes(value: number): string {
  const hours = Math.floor(value / 60).toString().padStart(2, "0");
  const minutes = (value % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function parseRange(range: string): { start: number; end: number } | null {
  if (!range.includes(" - ")) return null;
  const [start, end] = range.split(" - ");
  return {
    start: parseTimeToMinutes(start),
    end: parseTimeToMinutes(end)
  };
}

function buildBuckets(schedules: ScheduleItem[]): ShiftBucket[] {
  const buckets: Record<ShiftBucket["id"], ShiftBucket> = {
    morning: { id: "morning", label: "Turno manana", days: [], starts: [], ends: [] },
    afternoon: { id: "afternoon", label: "Turno tarde", days: [], starts: [], ends: [] }
  };

  for (const day of schedules) {
    if (day.isClosed) continue;

    for (const range of day.ranges) {
      const parsed = parseRange(range);
      if (!parsed) continue;

      const target = parsed.start < 13 * 60 ? buckets.morning : buckets.afternoon;

      if (!target.days.includes(day.weekday)) {
        target.days.push(day.weekday);
      }

      target.starts.push(parsed.start);
      target.ends.push(parsed.end);
    }
  }

  return Object.values(buckets).filter((bucket) => bucket.days.length > 0);
}

export function ScheduleTable({ schedules }: ScheduleTableProps) {
  const buckets = buildBuckets(schedules);
  const featuredId = buckets.reduce<{ id: ShiftBucket["id"] | null; total: number }>(
    (accumulator, bucket) => {
      if (bucket.days.length > accumulator.total) {
        return { id: bucket.id, total: bucket.days.length };
      }

      return accumulator;
    },
    { id: null, total: -1 }
  ).id;

  return (
    <section id="horarios" className="schedule" aria-labelledby="schedule-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Horarios</span>
          <h2 id="schedule-title">Entrena en el momento que mejor te funcione</h2>
          <p>Elegi entre turnos de manana y tarde segun tu rutina.</p>
        </div>
        <div className="schedule-grid" role="region" aria-label="Turnos disponibles">
          {buckets.map((bucket) => {
            const openFrom = Math.min(...bucket.starts);
            const openTo = Math.max(...bucket.ends);
            const isFeatured = bucket.id === featuredId;

            return (
              <article key={bucket.id} className={`schedule-card${isFeatured ? " featured" : ""}`}>
                <span>{bucket.label}</span>
                <strong>{formatMinutes(openFrom)} a {formatMinutes(openTo)}</strong>
                <p>{bucket.days.join(", ")}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

