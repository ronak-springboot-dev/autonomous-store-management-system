import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";

const USPS = [
  {
    icon: "⟐",
    iconBg: "#eff6ff",
    title: "One Decision, Three Disciplines",
    text: "Demand, inventory and pricing aren't three separate tools stitched together — they're three specialist agents reasoning over one shared SKU state before a single decision is made.",
  },
  {
    icon: "→",
    iconBg: "#ecfdf5",
    title: "Insight That Becomes Action",
    text: "Where most platforms stop at a forecast or a recommendation, the Decision Engine and Store Manager Agent carry it through to a next-best-action — recommended for approval, or executed automatically.",
  },
  {
    icon: "⚡",
    iconBg: "#fff7ed",
    title: "Built on Live Transactions",
    text: "Every sale updates the SKU Digital Twin the moment it happens — not on the next nightly batch or weekly planning cycle.",
  },
  {
    icon: "↻",
    iconBg: "#f5f3ff",
    title: "Learns From Its Own Outcomes",
    text: "Actual sales, inventory and revenue feed back into the system after every action, closing a loop most planning tools leave open.",
  },
];

const GAPS_CLOSED = [
  {
    gap: "Sales, inventory, supplier and pricing data live apart",
    closes: "One live SKU Digital Twin unifies them into a single operating state",
  },
  {
    gap: "No continuous, SKU-level view of the business",
    closes: "The Digital Twin updates in real time as every transaction happens",
  },
  {
    gap: "Forecasting, inventory and pricing sold as separate, disconnected tools",
    closes: "Three specialist agents converge natively on one decision, not three reports",
  },
  {
    gap: "Interpretation and action left entirely to store teams",
    closes: "An autonomous next-best-action — recommended or executed — replaces manual review",
  },
];

const COMPETITORS = ["RELEX Solutions", "Blue Yonder", "Manhattan Active"];

const COMPARISON_ROWS: { dimension: string; ours: string; others: string[] }[] = [
  {
    dimension: "Core proposition",
    ours: "Autonomous SKU-level store decisioning",
    others: ["Retail planning & optimization", "Supply-chain & retail planning", "Commerce & supply-chain execution"],
  },
  {
    dimension: "SKU as common intelligence unit",
    ours: "Core architectural principle",
    others: ["Strong", "Strong", "Strong"],
  },
  {
    dimension: "Live SKU Digital Twin",
    ours: "Central operating state",
    others: ["Planning / optimization models", "Planning / inventory models", "Operational inventory models"],
  },
  {
    dimension: "Billing as real-time consumption",
    ours: "Explicit event-driven mechanism",
    others: ["Retail data integration", "Retail data integration", "Operational integration"],
  },
  {
    dimension: "Demand intelligence",
    ours: "Dedicated AI agent",
    others: ["Advanced forecasting", "Advanced forecasting", "Forecasting capabilities"],
  },
  {
    dimension: "Inventory intelligence",
    ours: "Dedicated AI agent",
    others: ["Advanced optimization", "Advanced optimization", "Strong execution"],
  },
  {
    dimension: "Pricing intelligence",
    ours: "Demand + inventory aware",
    others: ["Pricing / markdown", "Pricing / promotion", "Commerce pricing"],
  },
  {
    dimension: "Multi-agent decisioning",
    ours: "Native specialist-agent model",
    others: ["Optimization platform", "Planning platform", "Workflow platform"],
  },
  {
    dimension: "Next-best-action",
    ours: "Core product outcome",
    others: ["Recommendations", "Planning recommendations", "Execution workflows"],
  },
  {
    dimension: "Closed-loop learning",
    ours: "Observe → Act → Measure → Improve",
    others: ["Optimization feedback", "Planning feedback", "Operational feedback"],
  },
];

const ADVANTAGES = [
  {
    title: "One Live SKU State",
    text: "Demand, inventory and pricing agents work from the same continuously updated Store + SKU state.",
  },
  {
    title: "Billing Drives Inventory",
    text: "A customer transaction is not just analytics. It immediately changes the inventory position.",
  },
  {
    title: "Cross-Agent Reasoning",
    text: "Demand, inventory and price are evaluated together before an operational recommendation is made.",
  },
  {
    title: "Next-Best-Action",
    text: "The system moves beyond explaining what is happening to determining what should happen next.",
  },
  {
    title: "Event-Driven Intelligence",
    text: "Store activity continuously refreshes the operational state instead of relying only on periodic reporting.",
  },
  {
    title: "Closed-Loop Autonomy",
    text: "Actual outcomes are compared against predictions and decisions to continuously improve the system.",
  },
];

const INDUSTRIES = [
  { icon: "◆", iconBg: "#eff6ff", title: "Fashion & Apparel", text: "High SKU churn, size/color variants, and fast markdown cycles." },
  { icon: "◈", iconBg: "#ecfdf5", title: "Grocery & Food Retail", text: "Perishables, high velocity, and thin margins that punish stockouts." },
  { icon: "✦", iconBg: "#fff7ed", title: "Footwear & Sports", text: "Deep size runs per style and sharp seasonal demand swings." },
  { icon: "◉", iconBg: "#f5f3ff", title: "Electronics & Durables", text: "High unit value, slower velocity, high cost of overstock." },
  { icon: "◇", iconBg: "#eff6ff", title: "Pharmacy & Health Retail", text: "Availability-critical SKUs alongside discretionary retail lines." },
  { icon: "⟡", iconBg: "#ecfdf5", title: "Specialty & Quick-Commerce", text: "Compressed replenishment windows and hyper-local demand." },
];

const PERSONAS = [
  {
    icon: "◈",
    iconBg: "#eff6ff",
    title: "Category & Merchandising Managers",
    text: "Get a prioritized, SKU-level action list instead of a wall of dashboards to interpret.",
  },
  {
    icon: "◆",
    iconBg: "#ecfdf5",
    title: "Store Operations Leads",
    text: "Receive clear replenishment, pricing and task alerts instead of reactive firefighting.",
  },
  {
    icon: "✦",
    iconBg: "#fff7ed",
    title: "Retail CXOs & Boards",
    text: "See stockout risk, overstock exposure and pricing opportunity roll up into one operating view.",
  },
];

export function DifferentiationPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="STRATEGIC DIFFERENTIATION"
        title="From Retail Analytics to an Autonomous Operating Layer"
        text="Forecasting, inventory optimization and pricing are established capabilities. Our differentiation is how these capabilities continuously converge around a live SKU state to determine the next-best action."
      />

      <SectionHeader
        label="OUR USP"
        title="What Makes This Different"
        description="Every part of this platform exists to answer one question the rest of the market answers only partially: what is the single best action to take on this SKU, right now — and who, or what, should do it?"
      />

      <div className="grid-2">
        {USPS.map((u) => (
          <Card key={u.title} icon={u.icon} iconBg={u.iconBg} title={u.title}>
            {u.text}
          </Card>
        ))}
      </div>

      <SectionHeader
        label="GAPS WE CLOSE"
        title="Every Capability Traces Back to a Real Gap"
        description="Directly mapped to the fragmentation problem described on page 01 — this isn't a feature list, it's a response."
      />

      <div className="comparison-container">
        <table className="comparison fr-table">
          <thead>
            <tr>
              <th>The Gap, Today</th>
              <th className="ours-header">How We Close It</th>
            </tr>
          </thead>
          <tbody>
            {GAPS_CLOSED.map((g) => (
              <tr key={g.gap}>
                <td>{g.gap}</td>
                <td className="ours">{g.closes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeader label="COMPETITIVE POSITIONING" title="Where We Create a Different Operating Model" />

      <div className="comparison-container">
        <table className="comparison">
          <thead>
            <tr>
              <th>Dimension</th>
              <th className="ours-header">Our Autonomous Store Manager</th>
              {COMPETITORS.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.dimension}>
                <td>{row.dimension}</td>
                <td className="ours">{row.ours}</td>
                {row.others.map((o, i) => (
                  <td key={i}>{o}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeader label="OUR SIX STRATEGIC ADVANTAGES" title="What Makes the Concept Distinctive" />

      <div className="grid-3">
        {ADVANTAGES.map((a, i) => (
          <div className="card advantage" key={a.title}>
            <div className="advantage-number">{String(i + 1).padStart(2, "0")}</div>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </div>
        ))}
      </div>

      <SectionHeader
        label="WHO THIS IS BUILT FOR"
        title="Target Industries & Customers"
        description="Built for multi-store retail chains operating at meaningful SKU and store scale — where manual, SKU-by-SKU review is no longer feasible."
      />

      <div className="grid-3">
        {INDUSTRIES.map((i) => (
          <Card key={i.title} icon={i.icon} iconBg={i.iconBg} title={i.title}>
            {i.text}
          </Card>
        ))}
      </div>

      <div className="section-header">
        <div className="label">BUYER PERSONAS</div>
        <h2>Who Uses It</h2>
      </div>

      <div className="grid-3">
        {PERSONAS.map((p) => (
          <Card key={p.title} icon={p.icon} iconBg={p.iconBg} title={p.title}>
            {p.text}
          </Card>
        ))}
      </div>

      <BoardMessage title="Our strategic positioning">
        Traditional retail technology helps organizations understand, plan and optimize. This
        platform is designed to add another layer: <b>continuous autonomous decision-making at
        the store and SKU level.</b>
      </BoardMessage>
    </section>
  );
}
