export interface UseCase {
  label: string;
  text: string;
}

export interface CustomerFitData {
  name: string;
  type: string;
  fit: "good" | "adapt";
  fitLabel: string;
  summary: string;
  useCases: UseCase[];
  pitch: string;
}

export function CustomerFitCard({ data }: { data: CustomerFitData }) {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 6 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 22 }}>{data.name}</h3>
          <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>{data.type}</div>
        </div>
        <span className={`pill-badge ${data.fit}`}>{data.fitLabel}</span>
      </div>

      <p style={{ margin: "14px 0 18px" }}>{data.summary}</p>

      <div style={{ display: "grid", gap: 9 }}>
        {data.useCases.map((u) => (
          <div className="usecase-row" key={u.label}>
            <strong>{u.label}</strong>
            <span>{u.text}</span>
          </div>
        ))}
      </div>

      <div className="customer-pitch">{data.pitch}</div>
    </div>
  );
}
