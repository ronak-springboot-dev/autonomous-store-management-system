export type PageId =
  | "problem"
  | "overview"
  | "marketFit"
  | "homeDepotFit"
  | "architecture"
  | "requirements"
  | "agents"
  | "scenario"
  | "usp";

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "problem", label: "01 · Problem Statement" },
  { id: "overview", label: "02 · Executive Overview" },
  { id: "marketFit", label: "03 · Customer Fit & Market" },
  { id: "homeDepotFit", label: "04 · Home Depot Business Fit" },
  { id: "architecture", label: "05 · Architecture & Flow" },
  { id: "requirements", label: "06 · Functional Requirements" },
  { id: "agents", label: "07 · AI Intelligence" },
  { id: "scenario", label: "08 · Business Scenario" },
  { id: "usp", label: "09 · Strategic Differentiation" },
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
