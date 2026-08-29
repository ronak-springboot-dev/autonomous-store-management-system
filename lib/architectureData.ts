// Shared data for the Architecture & Flow page: the visual layer/node layout
// plus the detail copy shown in the modal when a node is clicked.

export type ArchNodeKey =
  | "POS_BILLING"
  | "SUPPLIER_PO"
  | "SKU_MASTER"
  | "EVENT_STREAM"
  | "INVENTORY_LEDGER"
  | "SALES_HISTORY"
  | "ANALYTICS_STORE"
  | "SKU_DIGITAL_TWIN"
  | "SALES_FORECAST_AGENT"
  | "INVENTORY_AGENT"
  | "PRICE_AGENT"
  | "DEMAND_FORECAST"
  | "PROJECTED_INVENTORY"
  | "PRICE_RECOMMENDATION"
  | "DECISION_ENGINE"
  | "MANAGER_AGENT"
  | "REPLENISH"
  | "PRICE_ACTION"
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
  DECISION_ENGINE: {
    title: "SKU Decision Engine",
    description:
      "Combines the outputs of the three specialist AI agents. It determines the overall SKU situation, including stockout risk, overstock risk, replenishment requirements and pricing opportunities.",
  },
  MANAGER_AGENT: {
    title: "Autonomous Store Manager Agent",
    description:
      "Acts as the final decision-making layer. It prioritizes business conditions, reasons across the available intelligence and determines the next-best action. Depending on governance rules, the action can be recommended to a manager or executed automatically.",
  },
  REPLENISH: {
    title: "Replenishment Action",
    description:
      "Represents the action taken when forecast demand indicates insufficient inventory. The system can recommend or initiate replenishment according to configured business rules and approval policies.",
  },
  PRICE_ACTION: {
    title: "Price Action",
    description:
      "Represents the commercial action resulting from the pricing intelligence and overall SKU decision. This can include a price change or promotion recommendation.",
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
