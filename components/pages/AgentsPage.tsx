import { Fragment } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const AGENT_CARDS = [
  {
    icon: "◇",
    iconBg: "#eff6ff",
    title: "Demand Intelligence",
    text: "Learns from SKU-level billing history and sales velocity to predict what customers are likely to buy next.",
    question: '"What will likely sell next?"',
  },
  {
    icon: "◈",
    iconBg: "#ecfdf5",
    title: "Inventory Intelligence",
    text: "Continuously reconciles incoming inventory against actual billed consumption to understand what stock is really available.",
    question: '"Will we have enough stock?"',
  },
  {
    icon: "◆",
    iconBg: "#fff7ed",
    title: "Pricing Intelligence",
    text: "Evaluates demand and inventory conditions to identify pricing or promotion opportunities.",
    question: '"What should we charge?"',
  },
];

const CONVERGENCE_FLOW = [
  { title: "Demand", text: "Expected sales", variant: "ai" },
  { title: "Inventory", text: "Future stock", variant: "ai" },
  { title: "Pricing", text: "Commercial opportunity", variant: "ai" },
  { title: "Decision", text: "What should happen next?", variant: "active" },
];

export function AgentsPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="AI INTELLIGENCE LAYER"
        title="Three AI Specialists. One Store Brain."
        text="Each agent focuses on a specific retail intelligence problem while sharing the same live SKU context."
      />

      <div className="grid-3">
        {AGENT_CARDS.map((c) => (
          <Card key={c.title} icon={c.icon} iconBg={c.iconBg} title={c.title}>
            {c.text}
            <br />
            <br />
            <b>Business question:</b>
            <br />
            {c.question}
          </Card>
        ))}
      </div>

      <SectionHeader label="CONVERGENCE" title="Intelligence Becomes a Decision" />

      <div className="executive-flow">
        <div className="flow">
          {CONVERGENCE_FLOW.map((step, i) => (
            <Fragment key={step.title}>
              <div className={`flow-step ${step.variant}`}>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </div>
              {i < CONVERGENCE_FLOW.length - 1 && (
                <div className="flow-arrow">{i === CONVERGENCE_FLOW.length - 2 ? "→" : "+"}</div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
