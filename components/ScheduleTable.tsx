import { ScheduleItem } from "@/lib/types";

type ScheduleTableProps = {
  schedules: ScheduleItem[];
};

export function ScheduleTable({ schedules }: ScheduleTableProps) {
  return (
    <section id="horarios" className="schedule" aria-labelledby="schedule-title">
      <div className="container">
        <h2 id="schedule-title">Horarios</h2>
        <div className="table-wrap" role="region" aria-label="Horarios semanales">
          <table>
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horario</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((item) => (
                <tr key={item.weekday}>
                  <td>{item.weekday}</td>
                  <td>{item.ranges.join(" / ")}</td>
                  <td>{item.note ?? (item.isClosed ? "Cerrado" : "-")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
