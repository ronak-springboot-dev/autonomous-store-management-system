import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ScenarioCard, ScenarioData } from "@/components/ui/ScenarioCard";

const SCENARIOS: ScenarioData[] = [
  {
    tag: "STOCKOUT RISK",
    tagColor: "#ef4444",
    title: "Nike Running Shoe — Size 10",
    subtitle: "Recent sales velocity is on track to exhaust current inventory within days.",
    trendUnit: "UNITS SOLD, LAST 5 DAYS",
    trend: [
      { label: "DAY -5", value: 4 },
      { label: "DAY -4", value: 5 },
      { label: "DAY -3", value: 3 },
      { label: "DAY -2", value: 5 },
      { label: "DAY -1", value: 5 },
    ],
    stats: [
      { label: "Current Stock", value: "20" },
      { label: "Incoming Stock", value: "0" },
      { label: "Forecast Demand", value: "≈ 22" },
      { label: "Projected Stock", value: "-2", tone: "bad" },
    ],
    risk: { label: "HIGH RISK", level: "high" },
    action: {
      chips: ["Replenish SKU", "Review Pricing"],
      detail:
        "Projected stock falls below zero within 5 days. Replenish immediately, and hold price while supply catches up with demand.",
    },
  },
  {
    tag: "OVERSTOCK RISK",
    tagColor: "#f59e0b",
    title: "Winter Jacket — Size M",
    subtitle: "Sales velocity has slowed sharply while inventory keeps arriving.",
    trendUnit: "UNITS SOLD, LAST 5 DAYS",
    trend: [
      { label: "DAY -5", value: 6 },
      { label: "DAY -4", value: 4 },
      { label: "DAY -3", value: 3 },
      { label: "DAY -2", value: 2 },
      { label: "DAY -1", value: 1 },
    ],
    stats: [
      { label: "Current Stock", value: "340" },
      { label: "Incoming Stock", value: "60" },
      { label: "Forecast Demand", value: "≈ 12" },
      { label: "Locked Capital", value: "$18.4K", tone: "bad" },
    ],
    risk: { label: "MEDIUM RISK", level: "medium" },
    action: {
      chips: ["Markdown 15%", "Pause Reorder"],
      detail:
        "400 units on hand against ~12 units of forward demand. Markdown to accelerate sell-through and pause the next purchase order.",
    },
  },
  {
    tag: "PRICING OPPORTUNITY",
    tagColor: "#1c69ff",
    title: "Wireless Earbuds Pro",
    subtitle: "Demand is accelerating while stock coverage stays healthy.",
    trendUnit: "UNITS SOLD, LAST 5 DAYS",
    trend: [
      { label: "DAY -5", value: 8 },
      { label: "DAY -4", value: 11 },
      { label: "DAY -3", value: 14 },
      { label: "DAY -2", value: 16 },
      { label: "DAY -1", value: 19 },
    ],
    stats: [
      { label: "Current Stock", value: "140" },
      { label: "Incoming Stock", value: "50" },
      { label: "Forecast Demand", value: "≈ 95" },
      { label: "Projected Stock", value: "95", tone: "good" },
    ],
    risk: { label: "OPPORTUNITY", level: "opportunity" },
    action: {
      chips: ["Raise Price +8%", "Reduce Discount"],
      detail:
        "Demand is climbing daily and stock coverage stays comfortable. A modest price increase captures margin without risking lost sales.",
    },
  },
];

const COMPARISON_CARDS = [
  {
    title: "Traditional",
    lines: ['Dashboard shows:', '"Inventory = 20 units"', "Manager interprets the situation."],
  },
  {
    title: "Predictive",
    lines: ["AI identifies:", '"Expected demand ≈ 22"', '"Stockout risk is high."'],
  },
  {
    title: "Autonomous",
    lines: ["System determines:", '"Replenish now and evaluate pricing."', "The store receives a prioritized action."],
  },
];

export function ScenarioPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="BUSINESS SCENARIOS"
        title="Three SKUs, Three Different Next-Best Actions"
        text="The same decision loop — demand, inventory and price evaluated together — produces a different action depending on what each SKU actually needs: replenish, markdown, or reprice up."
      />

      <div className="scenario-grid">
        {SCENARIOS.map((s) => (
          <ScenarioCard key={s.title} data={s} />
        ))}
      </div>

      <SectionHeader label="WHY THIS MATTERS" title="The Difference Between Reporting and Acting" />

      <div className="grid-3">
        {COMPARISON_CARDS.map((c) => (
          <Card key={c.title} title={c.title}>
            {c.lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < c.lines.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}
