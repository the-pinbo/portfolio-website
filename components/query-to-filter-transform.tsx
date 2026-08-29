export function QueryToFilterTransform() {
  return (
    <figure className="query-to-filter-transform" aria-label="Smart Filters query resolution">
      <p className="query-to-filter-transform__query">Calls from last week where the customer mentioned cancellation</p>
      <div className="query-to-filter-transform__rows">
        <div className="query-to-filter-transform__row">
          <span>DATE</span>
          <strong>Last week</strong>
        </div>
        <div className="query-to-filter-transform__row">
          <span>TRACKER</span>
          <strong>Cancellation</strong>
        </div>
      </div>
    </figure>
  );
}
