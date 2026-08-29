import { Fragment } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";
import { MetricGrid } from "@/components/ui/MetricGrid";

const FLOW_STEPS = [
  { num: "01", title: "Observe", text: "Bills, inventory, orders & prices", variant: "active" },
  { num: "02", title: "Understand", text: "Live SKU Digital Twin", variant: "active" },
  { num: "03", title: "Predict", text: "Demand & future inventory", variant: "ai" },
  { num: "04", title: "Decide", text: "Next-best action", variant: "ai" },
  { num: "05", title: "Act", text: "Replenish, price or alert", variant: "active" },
  { num: "06", title: "Learn", text: "Measure actual outcomes", variant: "active" },
];

const VALUE_CARDS = [
  {
    icon: "◈",
    iconBg: "#eff6ff",
    title: "Protect Revenue",
    text: "Detect potential stockouts before demand is lost and trigger timely replenishment.",
  },
  {
    icon: "◆",
    iconBg: "#ecfdf5",
    title: "Optimize Working Capital",
    text: "Identify slow-moving and overstocked SKUs before excess inventory becomes a burden.",
  },
  {
    icon: "◉",
    iconBg: "#f5f3ff",
    title: "Improve Pricing",
    text: "Align pricing decisions with demand, inventory position and commercial opportunity.",
  },
  {
    icon: "✦",
    iconBg: "#fff7ed",
    title: "Scale Store Operations",
    text: "Move repetitive operational analysis from store teams to an AI decision layer.",
  },
];

export function OverviewPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="BOARD-LEVEL EXECUTIVE VIEW"
        title="Autonomous Retail Store Manager"
        text="An AI-powered operating layer that transforms retail transactions and inventory movements into continuous demand prediction, inventory intelligence, pricing decisions and autonomous store actions."
        message="From knowing what is happening → to deciding what should happen next."
      />

      <MetricGrid
        metrics={[
          { number: "SKU", label: "Single unit of intelligence across demand, inventory and pricing" },
          { number: "3 AI", label: "Specialist agents operating in parallel", color: "green" },
          { number: "360°", label: "Demand + inventory + pricing context", color: "purple" },
          { number: "∞", label: "Closed-loop observe → act → learn cycle", color: "orange" },
        ]}
      />

      <SectionHeader
        label="BUSINESS TRANSFORMATION"
        title="From Retail Data to Autonomous Decisions"
        description="The platform connects operational retail signals into a continuous decision-making loop."
      />

      <div className="executive-flow">
        <div className="flow">
          {FLOW_STEPS.map((step, i) => (
            <Fragment key={step.num}>
              <div className={`flow-step ${step.variant}`}>
                <div className="step-number">{step.num}</div>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </div>
              {i < FLOW_STEPS.length - 1 && <div className="flow-arrow">→</div>}
            </Fragment>
          ))}
        </div>
      </div>

      <SectionHeader label="EXECUTIVE VALUE" title="What the Business Gains" />

      <div className="grid-4">
        {VALUE_CARDS.map((c) => (
          <Card key={c.title} icon={c.icon} iconBg={c.iconBg} title={c.title}>
            {c.text}
          </Card>
        ))}
      </div>

      <BoardMessage title="The strategic opportunity is not another dashboard.">
        It is an intelligent operating layer for the store — continuously sensing demand,
        inventory and commercial signals and converting them into prioritized actions.
      </BoardMessage>
    </section>
  );
}
