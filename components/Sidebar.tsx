export type PageId =
  | "problem"
  | "overview"
  | "architecture"
  | "requirements"
  | "agents"
  | "scenario"
  | "usp";

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "problem", label: "01 · Problem Statement" },
  { id: "overview", label: "02 · Executive Overview" },
  { id: "requirements", label: "03 · Functional Requirements" },
  { id: "architecture", label: "04 · Architecture & Flow" },
  { id: "agents", label: "05 · AI Intelligence" },
  { id: "scenario", label: "06 · Business Scenario" },
  { id: "usp", label: "07 · Strategic Differentiation" },
];

export function Sidebar({
  activePage,
  onNavigate,
}: {
  activePage: PageId;
  onNavigate: (id: PageId) => void;
}) {
  return (
    <aside className="sidebar">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/intelera-logo-light.svg" alt="INTELERA" className="brand-logo" />

      <div className="brand">
        Autonomous Retail
        <br />
        <span className="accent">Store Manager</span>
      </div>

      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={activePage === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        Powered by INTELERA
      </div>
    </aside>
  );
}
