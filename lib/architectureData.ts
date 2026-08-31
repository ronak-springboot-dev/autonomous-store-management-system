// Shared data for the Architecture & Flow page: the visual layer/node layout
// plus the detail copy shown in the modal when a node is clicked.

export type ArchNodeKey =
  | "POS_BILLING"
  | "SUPPLIER_PO"
  | "SKU_MASTER"
  | "OMNICHANNEL"
  | "EXTERNAL_SIGNALS"
  | "EVENT_STREAM"
  | "INVENTORY_LEDGER"
  | "SALES_HISTORY"
  | "EXTERNAL_SIGNALS_DB"
  | "ANALYTICS_STORE"
  | "SKU_DIGITAL_TWIN"
  | "SALES_FORECAST_AGENT"
  | "INVENTORY_AGENT"
  | "PRICE_AGENT"
  | "DEMAND_FORECAST"
  | "PROJECTED_INVENTORY"
  | "PRICE_RECOMMENDATION"
  | "REPLENISHMENT_AGENT"
  | "SUPPLIER_INTEL_AGENT"
  | "STORE_TRANSFER_AGENT"
  | "PROMOTION_AGENT"
  | "DECISION_ENGINE"
  | "RISK_ENGINE"
  | "POLICY_ENGINE"
  | "EXPLAINABILITY_ENGINE"
  | "MANAGER_AGENT"
  | "HUMAN_IN_LOOP"
  | "REPLENISH"
  | "PRICE_ACTION"
  | "STORE_TRANSFER_ACTION"
  | "PROMOTION_ACTION"
  | "STORE_TASK"
  | "ACTUAL_OUTCOME"
  | "AI_EVALUATION";

// Note: the visual layout itself now lives in diagrams/architecture.puml, rendered to
// public/architecture-diagram.svg (see scripts/render-diagram.ps1). This file only holds the
// per-node detail copy shown in the modal, keyed by the same ArchNodeKey used as the link
// target (`[[#KEY]]`) on each node in the .puml source.

export const architectureDescriptions: Record<ArchNodeKey, { title: string; description: string }> = {
  POS_BILLING: {
    title: "POS / Billing",
    description:
      "Every customer transaction becomes an operational event. The system captures the SKU and quantity sold so the corresponding inventory position can immediately be reduced. This creates a direct connection between actual customer demand and inventory consumption.",
  },
  SUPPLIER_PO: {
    title: "Supplier / Purchase Orders",
    description:
      "Represents inventory coming into the store. Ordered and received quantities establish the supply side of the SKU's inventory position and allow the platform to understand future available stock.",
  },
  SKU_MASTER: {
    title: "SKU Master",
    description:
      "Provides the common product identity used throughout the platform. SKU, product, category, brand and variants such as size allow every AI decision to remain anchored to a specific retail item.",
  },
  OMNICHANNEL: {
    title: "Omnichannel Sales",
    description:
      "Captures demand from e-commerce and marketplace channels alongside in-store billing, so forecasts and inventory decisions reflect every way a customer can buy the SKU, not just walk-in traffic.",
  },
  EXTERNAL_SIGNALS: {
    title: "External Signals",
    description:
      "Brings outside context into the platform: weather, festivals and holidays, local events and competitor pricing. These signals help explain demand spikes and dips that internal sales data alone cannot.",
  },
  EVENT_STREAM: {
    title: "Retail Event Stream",
    description:
      "Continuously transports operational retail events such as sales, inventory receipts, returns, adjustments and price changes. This enables the store's operational state to stay current rather than waiting for periodic batch updates.",
  },
  INVENTORY_LEDGER: {
    title: "Inventory Ledger",
    description:
      "Maintains the auditable movement of inventory. Supplier receipts increase inventory, customer billing reduces inventory, and returns or adjustments modify the position. This creates a trusted operational inventory record.",
  },
  SALES_HISTORY: {
    title: "Sales History",
    description:
      "Maintains historical SKU-level billing activity. This provides the demand intelligence layer with the sales velocity and historical patterns required to estimate future demand.",
  },
  EXTERNAL_SIGNALS_DB: {
    title: "External Signals DB",
    description:
      "Stores weather, calendar and competitor signals alongside the store's own operational data, keyed to the same SKU and store context so the Digital Twin can reason about internal and external drivers together.",
  },
  ANALYTICS_STORE: {
    title: "Analytics Store",
    description:
      "Stores historical operational events and analytical features for reporting, model evaluation, auditability and continuous improvement of the AI decision system.",
  },
  SKU_DIGITAL_TWIN: {
    title: "SKU Digital Twin",
    description:
      "The Digital Twin is the shared live state of a Store + SKU. It brings together current stock, incoming inventory, sales velocity, price and historical demand so every AI agent operates from the same business context.",
  },
  SALES_FORECAST_AGENT: {
    title: "Sales Forecast Agent",
    description:
      "Looks at actual SKU-level billing history and sales velocity to estimate future demand. For example, five days of recent sales can be used to predict the expected number of units likely to be sold over the next five days.",
  },
  INVENTORY_AGENT: {
    title: "Inventory Analysis Agent",
    description:
      "Determines whether current and incoming inventory will be sufficient to satisfy forecast demand. It identifies projected stock levels, days until stockout and potential excess inventory.",
  },
  PRICE_AGENT: {
    title: "Price Optimization Agent",
    description:
      "Evaluates demand and inventory conditions alongside pricing information to identify commercial opportunities. The output may be to maintain the current price, adjust it or consider a promotion.",
  },
  DEMAND_FORECAST: {
    title: "Demand Forecast",
    description:
      "Represents the AI's expected future demand for a particular SKU over a defined period. This forecast becomes one of the key inputs into the store's operational decision.",
  },
  PROJECTED_INVENTORY: {
    title: "Projected Inventory",
    description:
      "Estimates future available inventory by combining current stock and expected receipts against forecast demand. This allows the system to identify potential stockouts before they happen.",
  },
  PRICE_RECOMMENDATION: {
    title: "Price Recommendation",
    description:
      "Provides a commercial pricing signal based on demand and inventory conditions. It allows pricing decisions to be considered alongside replenishment and stock risk rather than independently.",
  },
  REPLENISHMENT_AGENT: {
    title: "Replenishment Agent",
    description:
      "Calculates the reorder quantity and timing for a SKU by combining the demand forecast with the projected inventory position, turning stockout risk into a concrete purchase recommendation.",
  },
  SUPPLIER_INTEL_AGENT: {
    title: "Supplier Intelligence Agent",
    description:
      "Scores available suppliers on lead time, reliability and cost, and recommends the best sourcing option for a replenishment order rather than defaulting to a single fixed supplier.",
  },
  STORE_TRANSFER_AGENT: {
    title: "Store Transfer Agent",
    description:
      "For multi-store operations, identifies opportunities to move stock from a store with excess inventory to one facing a stockout, reducing the need for a new purchase order.",
  },
  PROMOTION_AGENT: {
    title: "Promotion / Markdown Agent",
    description:
      "Looks at demand and pricing signals to recommend promotions and markdowns, for example clearing aging or overstocked inventory before it reaches shelf-life expiry.",
  },
  DECISION_ENGINE: {
    title: "SKU Decision Engine",
    description:
      "Aggregates the recommendations from every specialist and autonomous agent and evaluates the trade-offs between them, forming the overall SKU situation before risk and policy checks are applied.",
  },
  RISK_ENGINE: {
    title: "Risk Engine",
    description:
      "Evaluates the risk profile of the aggregated recommendation across stockout, overstock, revenue, expiry, supplier and pricing dimensions before it is allowed to progress toward an action.",
  },
  POLICY_ENGINE: {
    title: "Policy Engine",
    description:
      "Applies business policies, constraints and guardrails, such as budget limits, minimum margins or supplier agreements, ensuring every recommendation respects the rules the business has set.",
  },
  EXPLAINABILITY_ENGINE: {
    title: "Explainability Engine",
    description:
      "Produces a plain-language rationale for each candidate action: why it is being suggested, its expected impact, the model's confidence and what the alternative options were.",
  },
  MANAGER_AGENT: {
    title: "Autonomous Store Manager Agent",
    description:
      "Acts as the final decision-making layer. It prioritizes business conditions, reasons across the available intelligence and determines the next-best action and the autonomy level (Observe, Recommend, Auto Execute or Fully Autonomous) at which it should run.",
  },
  HUMAN_IN_LOOP: {
    title: "Human-in-the-Loop",
    description:
      "Gives store managers the ability to review, approve, modify or override an AI-driven action before or after it executes, keeping human oversight in place wherever the configured autonomy level requires it.",
  },
  REPLENISH: {
    title: "Replenish (Purchase Orders)",
    description:
      "Represents the action taken when forecast demand indicates insufficient inventory. The system can recommend or initiate a purchase order according to configured business rules and approval policies.",
  },
  PRICE_ACTION: {
    title: "Price Action (Pricing Engine)",
    description:
      "Represents the commercial action resulting from the pricing intelligence and overall SKU decision. This can include a price change or promotion recommendation.",
  },
  STORE_TRANSFER_ACTION: {
    title: "Store Transfer",
    description:
      "Initiates or recommends moving inventory between stores based on the Store Transfer Agent's assessment, rebalancing stock across a multi-store network instead of ordering new inventory.",
  },
  PROMOTION_ACTION: {
    title: "Promotion (Promotion Engine)",
    description:
      "Launches or recommends a promotion or markdown campaign identified by the Promotion / Markdown Agent, converting a pricing opportunity into a customer-facing offer.",
  },
  STORE_TASK: {
    title: "Store Task",
    description:
      "Creates a task or alert for the store team when human intervention is appropriate, ensuring that the autonomous system can operate with human oversight where required.",
  },
  ACTUAL_OUTCOME: {
    title: "Actual Outcome",
    description:
      "Captures what actually happened after a decision: actual sales, inventory movement, revenue and other operational results. These outcomes are essential for measuring whether the AI decision was effective.",
  },
  AI_EVALUATION: {
    title: "AI Evaluation",
    description:
      "Measures forecast accuracy and decision effectiveness. The results provide feedback for improving models, agent reasoning and future decision policies.",
  },
};
