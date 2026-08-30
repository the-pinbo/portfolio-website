import { visualLabels } from "@/content/portfolio";

export function QueryToFilterTransform() {
  return (
    <figure className="query-to-filter-transform" aria-label={visualLabels.smartFilters.accessibleName}>
      <p className="query-to-filter-transform__query">{visualLabels.smartFilters.query}</p>
      <div className="query-to-filter-transform__rows">
        {visualLabels.smartFilters.rows.map((row) => (
          <div className="query-to-filter-transform__row" key={row.key}>
            <span>{row.key}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </figure>
  );
}
