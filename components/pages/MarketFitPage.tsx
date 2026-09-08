import { Fragment } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";
import { CustomerFitCard, CustomerFitData } from "@/components/ui/CustomerFitCard";

const CUSTOMERS: CustomerFitData[] = [
  {
    name: "The Home Depot",
    type: "Retail · Logistics · Home Services",
    fit: "good",
    fitLabel: "High Fit",
    summary:
      "A strong fit because the system addresses operational challenges across stores, inventory, supply chain, fulfillment and service-oriented product availability.",
    useCases: [
      { label: "Retail Stores", text: "Identify low-stock products, sales trends and the next operational action at SKU level." },
      { label: "Inventory & Merchandising", text: "Forecast demand and reduce both stockouts and excess inventory." },
      { label: "Logistics & Supply Chain", text: "Support replenishment, inventory positioning and product availability decisions." },
      { label: "Home Services", text: "Predict product and material requirements for service and project demand." },
      { label: "Pricing Intelligence", text: "Combine demand and inventory signals to support pricing recommendations." },
    ],
    pitch:
      "Instead of giving operations teams another dashboard, continuously identify what needs attention and recommend the next best action.",
  },
  {
    name: "Valere",
    type: "Healthcare · DME · Order & Fulfillment Operations",
    fit: "adapt",
    fitLabel: "Adaptable Fit",
    summary:
      "The same inventory intelligence architecture can be adapted to healthcare and DME environments where product availability, demand, order fulfillment and operational efficiency are critical.",
    useCases: [
      { label: "DME Inventory", text: "Monitor medical equipment and product availability across locations." },
      { label: "Demand Forecasting", text: "Predict demand patterns to improve inventory planning." },
      { label: "Order Fulfillment", text: "Prioritize fulfillment actions based on demand and availability." },
      { label: "Slow-Moving Inventory", text: "Detect aging or underutilized inventory and surface operational exceptions." },
      { label: "Multi-Location Operations", text: "Provide location-level intelligence for inventory and fulfillment decisions." },
    ],
    pitch:
      "Adapt the autonomous inventory and decision layer for DME operations without rebuilding the core intelligence architecture.",
  },
];

interface MatrixRow {
  capability: string;
  cells: ("good" | "adapt" | "na")[];
}

const MATRIX_COLUMNS = ["Home Depot Retail", "Home Depot Logistics", "Home Depot Home Services", "Valere DME", "New Customers"];

const MATRIX_ROWS: MatrixRow[] = [
  { capability: "Sales Intelligence", cells: ["good", "good", "good", "adapt", "good"] },
  { capability: "Inventory Intelligence", cells: ["good", "good", "good", "good", "good"] },
  { capability: "Demand Forecasting", cells: ["good", "good", "good", "good", "good"] },
  { capability: "Replenishment Intelligence", cells: ["good", "good", "good", "good", "good"] },
  { capability: "Supplier Intelligence", cells: ["good", "good", "good", "adapt", "good"] },
  { capability: "Pricing Intelligence", cells: ["good", "na", "na", "na", "good"] },
  { capability: "Fulfillment Optimization", cells: ["good", "good", "good", "good", "good"] },
  { capability: "AI Recommendations", cells: ["good", "good", "good", "good", "good"] },
  { capability: "Autonomous Actions", cells: ["good", "good", "good", "adapt", "good"] },
];

function MatrixCell({ value }: { value: "good" | "adapt" | "na" }) {
  if (value === "good") return <span className="pill-badge good">✓</span>;
  if (value === "adapt") return <span className="pill-badge adapt">Adapt</span>;
  return <span style={{ color: "var(--muted)" }}>—</span>;
}

const MARKETS = [
  { icon: "◈", iconBg: "#eff6ff", title: "Retail", text: "Store inventory, replenishment, pricing, stockout prevention and demand forecasting.", stars: "★★★★★ Strongest Fit" },
  { icon: "◆", iconBg: "#ecfdf5", title: "Logistics & Distribution", text: "Inventory positioning, demand prediction, replenishment and fulfillment optimization.", stars: "★★★★★ Strongest Fit" },
  { icon: "✦", iconBg: "#fff7ed", title: "Healthcare / DME", text: "Equipment availability, inventory intelligence, demand and order fulfillment.", stars: "★★★★☆ Adaptable" },
  { icon: "◉", iconBg: "#f5f3ff", title: "Industrial Distribution", text: "Spare parts, MRO inventory, purchasing signals and availability optimization.", stars: "★★★★★ Strong Fit" },
  { icon: "◇", iconBg: "#eff6ff", title: "Automotive Parts", text: "Location-level parts demand, stock availability and inventory optimization.", stars: "★★★★★ Strong Fit" },
  { icon: "⟡", iconBg: "#ecfdf5", title: "Field Services", text: "Predict parts requirements and ensure technicians have the right products available.", stars: "★★★★☆ Adaptable" },
  { icon: "◈", iconBg: "#fff7ed", title: "Wholesale", text: "Multi-location inventory, purchasing decisions and customer demand forecasting.", stars: "★★★★★ Strong Fit" },
  { icon: "◆", iconBg: "#f5f3ff", title: "Electronics", text: "Fast-changing demand, inventory aging, stockouts and pricing intelligence.", stars: "★★★★☆ Strong Fit" },
  { icon: "✦", iconBg: "#eff6ff", title: "Pharmacy / Health Retail", text: "Demand prediction, product availability, replenishment and inventory risk management.", stars: "★★★★☆ Adaptable" },
];

const JOURNEY = [
  { num: "01", title: "Today", text: "Autonomous Store Management System for retail operations." },
  { num: "02", title: "Current Customers", text: "Extend into retail, logistics, home services and DME workflows." },
  { num: "03", title: "Reusable AI Layer", text: "Demand, inventory, supplier, pricing and fulfillment intelligence." },
  { num: "04", title: "Future Markets", text: "Retail, healthcare, distribution, manufacturing and field services." },
];

const VALUE_ITEMS = [
  { title: "Expandable Across Customers", text: "The same core platform can support different customers, departments and operational environments." },
  { title: "Cross-Industry Applicability", text: "The intelligence layer can be adapted for retail, healthcare, logistics, distribution and other inventory-intensive businesses." },
  { title: "Land & Expand", text: "Start with inventory intelligence and progressively expand into forecasting, procurement, pricing, fulfillment and automation." },
  { title: "Reusable Intelligence", text: "A common AI foundation can power customer-specific workflows, rules, integrations and operational decisions." },
  { title: "From Insights to Actions", text: "Move beyond dashboards by identifying priorities and recommending the next best operational action." },
  { title: "Scalable Product Potential", text: "The system can evolve from a retail solution into a broader autonomous operations platform." },
];

export function MarketFitPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="CUSTOMER FIT & MARKET APPLICABILITY"
        title="Where the System Creates Business Value"
        text="The Autonomous Store Management System is not limited to traditional retail. Its underlying intelligence layer can support businesses that manage distributed inventory, variable demand, fulfillment and operational decisions."
        message="An autonomous intelligence layer that turns operational data into actionable decisions."
      />

      <SectionHeader
        label="CURRENT ACCOUNTS"
        title="Fit With Current Customers"
        description="The platform can act as an intelligence and decision layer across multiple operational functions within existing customer accounts."
      />

      <div className="grid-2">
        {CUSTOMERS.map((c) => (
          <CustomerFitCard key={c.name} data={c} />
        ))}
      </div>

      <SectionHeader
        label="CAPABILITY FIT"
        title="Customer Capability Fit Matrix"
        description="The core capabilities remain reusable while customer-specific workflows, data sources, business rules and integrations can be configured for each environment."
      />

      <div className="comparison-container">
        <table className="comparison">
          <thead>
            <tr>
              <th>Capability</th>
              {MATRIX_COLUMNS.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX_ROWS.map((row) => (
              <tr key={row.capability}>
                <td>{row.capability}</td>
                {row.cells.map((cell, i) => (
                  <td key={i}>
                    <MatrixCell value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid-3" style={{ marginTop: 16 }}>
        <div className="usecase-row">
          <strong>✓ Core Fit</strong>
          <span>Directly supported by the current platform.</span>
        </div>
        <div className="usecase-row">
          <strong>Adapt · Configurable Fit</strong>
          <span>Requires customer-specific workflows, data or integrations.</span>
        </div>
        <div className="usecase-row">
          <strong>— Not Applicable</strong>
          <span>Not a primary requirement for this use case.</span>
        </div>
      </div>

      <SectionHeader
        label="EXPANSION"
        title="New Customer Opportunities"
        description="The strongest expansion opportunities are organizations where inventory, demand variability and operational decisions create measurable business impact."
      />

      <div className="grid-3">
        {MARKETS.map((m) => (
          <Card key={m.title} icon={m.icon} iconBg={m.iconBg} title={m.title}>
            {m.text}
            <br />
            <br />
            <b style={{ color: "var(--brand-orange)" }}>{m.stars}</b>
          </Card>
        ))}
      </div>

      <SectionHeader label="GROWTH PATH" title="From Retail Product to Autonomous Operations" description="The commercial opportunity is to reuse the same intelligence architecture across customers, departments and industries." />

      <div className="executive-flow">
        <div className="flow">
          {JOURNEY.map((step, i) => (
            <Fragment key={step.num}>
              <div className="flow-step active">
                <div className="step-number">{step.num}</div>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </div>
              {i < JOURNEY.length - 1 && <div className="flow-arrow">→</div>}
            </Fragment>
          ))}
        </div>
      </div>

      <SectionHeader label="WHY THIS MATTERS" title="Why This System Matters" description="The system moves beyond monitoring and reporting by connecting operational data with AI-driven recommendations and actions. Its reusable architecture allows the same intelligence to be applied across customers, departments and inventory-driven industries." />

      <div className="grid-3">
        {VALUE_ITEMS.map((v, i) => (
          <div className="card advantage" key={v.title}>
            <div className="advantage-number">{String(i + 1).padStart(2, "0")}</div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>

      <BoardMessage title="Start with retail. Scale into autonomous operations.">
        The core opportunity is to transform operational data into prioritized decisions and
        actions, then reuse that intelligence across customers, departments and
        inventory-driven industries.
      </BoardMessage>
    </section>
  );
}
