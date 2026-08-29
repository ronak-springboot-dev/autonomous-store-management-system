export interface Metric {
  number: string;
  label: string;
  color?: "green" | "purple" | "orange" | "red";
}

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="metric-grid">
      {metrics.map((m, i) => (
        <div key={i} className={`metric-card${m.color ? ` ${m.color}` : ""}`}>
          <div className="metric-number">{m.number}</div>
          <div className="metric-label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
