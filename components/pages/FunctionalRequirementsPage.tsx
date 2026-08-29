import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";

interface Requirement {
  id: string;
  requirement: string;
  description: string;
}

interface RequirementGroup {
  category: string;
  tint: string;
  border: string;
  requirements: Requirement[];
}

const REQUIREMENT_GROUPS: RequirementGroup[] = [
  {
    category: "Data Ingestion",
    tint: "#eff6ff",
    border: "#93c5fd",
    requirements: [
      {
        id: "FR-1",
        requirement: "Continuous billing / POS ingestion",
        description: "Capture every SKU sale as a consumption event in near real time as transactions occur.",
      },
      {
        id: "FR-2",
        requirement: "Supplier & purchase order ingestion",
        description: "Ingest ordered and received quantities to establish incoming inventory and expected receipts.",
      },
      {
        id: "FR-3",
        requirement: "SKU master data management",
        description: "Maintain a canonical SKU identity (product, category, brand, variant) referenced by every agent.",
      },
      {
        id: "FR-4",
        requirement: "Pricing data ingestion",
        description: "Track current and historical prices per SKU as an input to pricing decisions.",
      },
    ],
  },
  {
    category: "Sales Forecast Agent",
    tint: "#eff6ff",
    border: "#93c5fd",
    requirements: [
      {
        id: "FR-5",
        requirement: "SKU-level demand forecasting",
        description: "Predict expected units to be sold per SKU over a defined forward-looking window using historical billing history.",
      },
      {
        id: "FR-6",
        requirement: "Sales velocity trend detection",
        description: "Detect acceleration, deceleration or seasonality in recent sales velocity per SKU.",
      },
    ],
  },
  {
    category: "Inventory Analysis Agent",
    tint: "#ecfdf5",
    border: "#86efac",
    requirements: [
      {
        id: "FR-7",
        requirement: "Real-time stock position tracking",
        description: "Continuously reconcile incoming receipts against billed consumption to reflect true available stock.",
      },
      {
        id: "FR-8",
        requirement: "Projected inventory calculation",
        description: "Combine current stock and expected receipts against forecast demand to project future stock position.",
      },
      {
        id: "FR-9",
        requirement: "Stockout risk detection",
        description: "Flag SKUs where projected stock is expected to fall to zero or below within a defined horizon.",
      },
      {
        id: "FR-10",
        requirement: "Overstock risk detection",
        description: "Flag SKUs where stock materially exceeds forecast demand, indicating excess working capital exposure.",
      },
    ],
  },
  {
    category: "Price Optimization Agent",
    tint: "#fff7ed",
    border: "#fdba74",
    requirements: [
      {
        id: "FR-11",
        requirement: "Demand & inventory-aware pricing",
        description: "Recommend maintaining, adjusting, or promoting a SKU's price based on combined demand and inventory signals.",
      },
      {
        id: "FR-12",
        requirement: "Promotion opportunity identification",
        description: "Identify SKUs where a promotion would help clear overstock risk or capture demand upside.",
      },
    ],
  },
  {
    category: "Decision & Action",
    tint: "#f5f3ff",
    border: "#c4b5fd",
    requirements: [
      {
        id: "FR-13",
        requirement: "Cross-agent SKU decision engine",
        description: "Combine forecast, inventory and pricing agent outputs into a single per-SKU risk and opportunity assessment.",
      },
      {
        id: "FR-14",
        requirement: "Next-best-action determination",
        description: "Prioritize and select the single most valuable action for a SKU from the available options.",
      },
      {
        id: "FR-15",
        requirement: "Recommend vs. autonomous execution",
        description: "Support configurable governance: recommend an action for approval, or execute automatically within defined policy limits.",
      },
      {
        id: "FR-16",
        requirement: "Store task / alert generation",
        description: "Create a task or alert for store teams when human review or intervention is required.",
      },
    ],
  },
  {
    category: "Feedback & Learning",
    tint: "#f1f5f9",
    border: "#cbd5e1",
    requirements: [
      {
        id: "FR-17",
        requirement: "Actual outcome capture",
        description: "Record actual sales, inventory movement and revenue following every decision or action.",
      },
      {
        id: "FR-18",
        requirement: "Forecast & decision accuracy evaluation",
        description: "Continuously measure forecast and decision effectiveness against actual outcomes to improve future performance.",
      },
    ],
  },
];

const NFRS = [
  {
    icon: "⏱",
    iconBg: "#eff6ff",
    title: "Near Real-Time Processing",
    text: "Billing and inventory events update the SKU state continuously rather than in periodic batches.",
  },
  {
    icon: "▦",
    iconBg: "#ecfdf5",
    title: "Per-SKU Scalability",
    text: "The system must scale to every SKU, in every store, without degrading forecast or decision latency.",
  },
  {
    icon: "◎",
    iconBg: "#f5f3ff",
    title: "Explainability & Audit Trail",
    text: "Every recommendation or autonomous action must be traceable back to the signals and reasoning behind it.",
  },
  {
    icon: "☑",
    iconBg: "#fff7ed",
    title: "Human Override & Governance",
    text: "Store and category managers can review, override or set approval thresholds for autonomous actions.",
  },
  {
    icon: "🔒",
    iconBg: "#eff6ff",
    title: "Access Control & Security",
    text: "Role-based access to store, SKU and pricing data, consistent with retail data-governance requirements.",
  },
  {
    icon: "⇄",
    iconBg: "#ecfdf5",
    title: "Extensibility",
    text: "New agents, data sources or store systems can be integrated without redesigning the decision layer.",
  },
];

function RequirementGroupBlock({ group }: { group: RequirementGroup }) {
  return (
    <div className="fr-group">
      <div className="fr-group-header">
        <span className="fr-group-tag" style={{ background: group.tint, borderColor: group.border }}>
          {group.category}
        </span>
        <span className="fr-group-count">
          {group.requirements.length} requirement{group.requirements.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="comparison-container">
        <table className="comparison fr-table">
          <thead>
            <tr>
              <th className="req-id">ID</th>
              <th>Requirement</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {group.requirements.map((r) => (
              <tr key={r.id}>
                <td className="req-id">{r.id}</td>
                <td>{r.requirement}</td>
                <td>{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FunctionalRequirementsPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="SYSTEM REQUIREMENTS"
        title="What the Platform Must Do"
        text="Functional requirements are grouped by the part of the system responsible for them: data ingestion, the three specialist agents, the decision & action layer, and the feedback loop that keeps the system learning."
      />

      <SectionHeader label="FUNCTIONAL REQUIREMENTS" title="Capability Checklist, by System Layer" />

      <div className="fr-groups">
        {REQUIREMENT_GROUPS.map((group) => (
          <RequirementGroupBlock key={group.category} group={group} />
        ))}
      </div>

      <SectionHeader
        label="NON-FUNCTIONAL REQUIREMENTS"
        title="Operating Standards the Platform Must Meet"
      />

      <div className="grid-3">
        {NFRS.map((n) => (
          <Card key={n.title} icon={n.icon} iconBg={n.iconBg} title={n.title}>
            {n.text}
          </Card>
        ))}
      </div>

      <BoardMessage title="Requirements are scoped to one outcome: a decision, not just a data point.">
        Every functional requirement exists to move a SKU from raw event data toward a
        specific, prioritized action — replenish, reprice, or alert — with the accuracy of
        that action continuously measured and improved.
      </BoardMessage>
    </section>
  );
}
