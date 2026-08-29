import { trackRecord } from "@/content/portfolio";

export function TypographicIndex() {
  return (
    <section className="typographic-index" aria-label="Track record">
      <ol>
        {trackRecord.map((entry) => (
          <li key={entry.institution}>
            <span className="typographic-index__date">{entry.dateRange}</span>
            <div>
              <strong>{entry.institution}</strong>
              <span>{entry.role}</span>
              <p>{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
