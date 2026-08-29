import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";

const PAIN_POINTS = [
  {
    title: "Sales, inventory, supplier and pricing data live apart",
    text: "Billing systems, stock records, purchase orders and price lists are managed as separate systems. No single view connects what was sold, what remains, what is arriving and what it should cost.",
  },
  {
    title: "No continuous SKU-level picture",
    text: "Store teams cannot reliably answer, at any moment, what is selling, what stock remains, what demand is likely, and what should be done next — for an individual SKU, not just a category or store total.",
  },
  {
    title: "Forecasting, inventory and pricing are sold as separate tools",
    text: "Existing retail systems typically provide reporting, forecasting, or optimization as isolated capabilities rather than a connected decision layer.",
  },
  {
    title: "Interpretation and action are left entirely to people",
    text: "Even where insight exists, store teams must manually interpret dashboards and reports, then decide and execute the response — a slow, inconsistent, reactive process at SKU scale.",
  },
];

const CONSEQUENCES = [
  { number: "↓", label: "Lost Revenue", detail: "Stockouts go undetected until a sale is already missed", color: "red" as const },
  { number: "↑", label: "Locked Capital", detail: "Overstocked, slow-moving SKUs quietly tie up working capital", color: "orange" as const },
  { number: "?", label: "Suboptimal Pricing", detail: "Prices set without demand or inventory context", color: "purple" as const },
  { number: "⏱", label: "Reactive Operations", detail: "Teams respond after the fact instead of ahead of it", color: "" as const },
];

export function ProblemStatementPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="THE PROBLEM"
        title="Retail Runs on Fragmented Data and Manual Judgment"
        text="Retail stores operate with fragmented sales, inventory, supplier, and pricing data, making it difficult to continuously understand what is selling, what stock remains, what demand is likely to be, and what action should be taken next at an individual SKU level."
        message="Existing retail systems primarily provide reporting, forecasting, or optimization as separate capabilities — leaving store teams to interpret the insights and manually act on them."
      />

      <SectionHeader
        label="WHERE THE GAP LIVES"
        title="Four Compounding Pain Points"
        description="Each pain point on its own is manageable. Together, at SKU scale, across an entire store, they overwhelm manual review."
      />

      <div className="pain-list">
        {PAIN_POINTS.map((p, i) => (
          <div className="pain-item" key={i}>
            <div className="pain-mark">{i + 1}</div>
            <div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader
        label="BUSINESS CONSEQUENCE"
        title="What Fragmentation Costs the Business"
      />

      <div className="grid-4">
        {CONSEQUENCES.map((c, i) => (
          <Card key={i} title={c.label} className={c.color ? `metric-card ${c.color}` : undefined}>
            {c.detail}
          </Card>
        ))}
      </div>

      <BoardMessage title="The gap isn't a lack of data — it's a lack of a continuous, connected decision layer.">
        Sales, inventory, supplier and pricing signals already exist inside most stores. What is
        missing is a system that continuously fuses them at the SKU level and turns them into a
        clear, prioritized next action — instead of another report for someone to interpret.
      </BoardMessage>
    </section>
  );
}
