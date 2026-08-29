export interface ScenarioStat {
  label: string;
  value: string;
  tone?: "neutral" | "good" | "bad";
}

export interface ScenarioTrendPoint {
  label: string;
  value: number;
}

export interface ScenarioAction {
  chips: string[];
  detail: string;
}

export interface ScenarioData {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  trend: ScenarioTrendPoint[];
  trendUnit: string;
  stats: ScenarioStat[];
  risk: { label: string; level: "high" | "medium" | "opportunity" };
  action: ScenarioAction;
}

const RISK_STYLES: Record<ScenarioData["risk"]["level"], { bg: string; border: string; text: string }> = {
  high: { bg: "#fef2f2", border: "#fca5a5", text: "#b91c1c" },
  medium: { bg: "#fff7ed", border: "#fdba74", text: "#c2410c" },
  opportunity: { bg: "#eff6ff", border: "#93c5fd", text: "#1d4ed8" },
};

export function ScenarioCard({ data }: { data: ScenarioData }) {
  const maxValue = Math.max(...data.trend.map((t) => t.value), 1);
  const risk = RISK_STYLES[data.risk.level];

  return (
    <div className="scenario-card">
      <div className="scenario-card-head">
        <span className="scenario-tag" style={{ background: data.tagColor + "1a", color: data.tagColor, borderColor: data.tagColor }}>
          {data.tag}
        </span>
        <span
          className="scenario-risk-badge"
          style={{ background: risk.bg, borderColor: risk.border, color: risk.text }}
        >
          {data.risk.label}
        </span>
      </div>

      <h3 className="scenario-title">{data.title}</h3>
      <p className="scenario-subtitle">{data.subtitle}</p>

      <div className="scenario-trend">
        <div className="scenario-trend-label">{data.trendUnit}</div>
        <div className="scenario-trend-bars">
          {data.trend.map((point) => (
            <div className="scenario-trend-bar" key={point.label}>
              <div className="scenario-trend-bar-track">
                <div
                  className="scenario-trend-bar-fill"
                  style={{ height: `${Math.max((point.value / maxValue) * 100, 6)}%`, background: data.tagColor }}
                />
              </div>
              <span className="scenario-trend-value">{point.value}</span>
              <span className="scenario-trend-day">{point.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scenario-stats">
        {data.stats.map((s) => (
          <div className={`scenario-stat${s.tone ? ` ${s.tone}` : ""}`} key={s.label}>
            <div className="scenario-stat-value">{s.value}</div>
            <div className="scenario-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="scenario-action">
        <div className="scenario-action-label">Recommended Action</div>
        <div className="scenario-action-chips">
          {data.action.chips.map((chip) => (
            <span className="scenario-action-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <p className="scenario-action-detail">{data.action.detail}</p>
      </div>
    </div>
  );
}
