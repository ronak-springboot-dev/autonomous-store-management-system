import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BoardMessage } from "@/components/ui/BoardMessage";

const WHITE_SPACE_CARDS = [
  { icon: "THD", iconBg: "#eff6ff", title: "Sidekick", text: "Associate task prioritization and operational guidance." },
  { icon: "AI", iconBg: "#ecfdf5", title: "Magic Apron", text: "Customer and associate product/project guidance in stores." },
  { icon: "FUL", iconBg: "#fff7ed", title: "Fulfillment intelligence", text: "Best-location and delivery capabilities optimize individual fulfillment decisions." },
  { icon: "PRO", iconBg: "#f5f3ff", title: "Pro ecosystem", text: "Project planning, inventory visibility, delivery tracking and complex order scheduling." },
  { icon: "INV", iconBg: "#eff6ff", title: "Inventory & supply chain", text: "Forecasting, replenishment and network capabilities manage product flow." },
];

const USE_CASES = [
  { num: "01", title: "Store fulfillment orchestration", text: "Help stores balance customer demand, Express Delivery, BOPIS, Pro orders, inventory availability and associate capacity while protecting service commitments." },
  { num: "02", title: "Pro commitment protection", text: "Continuously identify risks to jobsite commitments and recommend inventory, fulfillment or labor actions before a Pro order becomes a service failure." },
  { num: "03", title: "Autonomous exception management", text: "Reduce the operational noise by ranking thousands of events down to the few actions that materially affect revenue, customer experience or SLA performance." },
];

const SIGNALS = [
  { tag: "Signal", title: "Demand spike", text: "A high-demand SKU is being consumed faster than expected." },
  { tag: "Signal", title: "Pro commitment", text: "A time-sensitive Pro job requires inventory that is now at risk." },
  { tag: "Signal", title: "Fulfillment pressure", text: "Express and same-day orders are competing for the same store inventory." },
];

const ROI_ITEMS = [
  { title: "Decision latency", text: "Reduce time from signal → decision → action." },
  { title: "Conflict resolution", text: "Measure how many cross-system conflicts are automatically resolved." },
  { title: "Availability", text: "Reduce preventable stockouts and improve product readiness." },
  { title: "Fulfillment", text: "Protect on-time and complete fulfillment commitments." },
  { title: "Productivity", text: "Reduce manual exception analysis and prioritize associate effort." },
  { title: "Pro experience", text: "Protect time-sensitive jobsite commitments and reduce friction." },
];

export function HomeDepotFitPage() {
  return (
    <section className="page">
      <Hero
        eyebrow="ENTERPRISE BUSINESS FIT · THE HOME DEPOT"
        title="From Store Intelligence to Store Action"
        text="An autonomous decision layer that turns inventory, demand, fulfillment, Pro commitments and store-capacity signals into prioritized operational actions."
      />

      <SectionHeader
        label="THE OPPORTUNITY"
        title="Home Depot already has the data. The next opportunity is coordinating the decision."
        description="Home Depot is investing in interconnected retail, Pro acceleration, AI and store-based fulfillment. This product is positioned as an orchestration layer across those capabilities — not a replacement for existing systems."
      />

      <div className="pull-quote">
        <p>
          "The goal isn't another dashboard.{" "}
          <span className="accent">
            The goal is a store that can detect risk, decide the best action, execute through
            existing systems and escalate only when human judgment is required.
          </span>
          "
        </p>
      </div>

      <SectionHeader
        label="THE WHITE SPACE"
        title="Home Depot has intelligent systems. The missing opportunity is cross-system trade-off resolution."
        description="Publicly, Home Depot describes strong capabilities across associate tasking, AI shopping guidance, fulfillment, Pro project management and supply chain. We are not proposing another point solution. We are proposing a decision layer that evaluates competing priorities together."
      />

      <div className="grid-3">
        {WHITE_SPACE_CARDS.map((c) => (
          <Card key={c.title} icon={c.icon} iconBg={c.iconBg} title={c.title}>
            {c.text}
          </Card>
        ))}
        <Card icon="+" iconBg="#fff7ed" title="Our opportunity" className="card-accent-orange">
          <strong>Resolve conflicts across these decisions</strong> and choose the highest-value
          action against the current business objective.
        </Card>
      </div>

      <SectionHeader
        label="THE PROBLEM TO SOLVE"
        title="What happens when every intelligent system is individually right — but the business still has a conflict?"
        description="A store can simultaneously have a Pro commitment, Express order, BOPIS demand, low inventory, delayed inbound and limited associate capacity. The problem becomes a business trade-off — not a single-system optimization."
      />

      <div className="executive-flow">
        <div className="flow">
          <div className="flow-step active">
            <strong>Pro commitment</strong>
            <span>Protect jobsite SLA</span>
          </div>
          <div className="flow-arrow">+</div>
          <div className="flow-step active">
            <strong>Express</strong>
            <span>Three-hour promise</span>
          </div>
          <div className="flow-arrow">+</div>
          <div className="flow-step active">
            <strong>BOPIS + demand</strong>
            <span>Customer availability</span>
          </div>
        </div>
      </div>

      <div style={{ height: 18 }} />

      <div className="pull-quote">
        <p>
          The question is no longer <span className="accent">"What does each system recommend?"</span>
          <br />
          It is <span className="accent">"What is the best business decision across all recommendations?"</span>
        </p>
      </div>

      <SectionHeader label="WHERE IT FITS" title="Three high-value Home Depot business plays" description="Start where the business value is easiest to demonstrate and measure." />

      <div className="grid-3">
        {USE_CASES.map((u) => (
          <Card key={u.num} icon={u.num} title={u.title}>
            {u.text}
          </Card>
        ))}
      </div>

      <SectionHeader
        label="DECISION INTELLIGENCE"
        title="Turn competing signals into one ranked action plan."
        description="The engine can score candidate actions against business objectives, constraints, risk, service commitments and expected impact."
      />

      <div className="console-box" style={{ marginBottom: 28 }}>
        <pre>
          <span className="accent">BUSINESS STATE</span>
          {`
Inventory + Orders + Pro commitments + Demand + Delivery SLA + Store capacity + Inbound
                                      │
                                      ▼
`}
          <span className="accent">CONFLICT DETECTION</span>
          {`
Shortage / SLA risk / competing demand / labor constraint / network imbalance
                                      │
                                      ▼
`}
          <span className="accent">CANDIDATE ACTIONS</span>
          {`
Transfer • Replenish • Expedite • Reallocate • Reprioritize labor • Hold • Escalate
                                      │
                                      ▼
`}
          <span className="accent">OPTIMIZATION</span>
          {`
Business objective + constraints + risk + cost + customer/Pro impact
                                      │
                                      ▼
`}
          <span className="accent">DECISION</span>
          {`
Recommended action + alternatives + reason + expected business impact`}
        </pre>
      </div>

      <SectionHeader label="HOW THE PRODUCT CHANGES THE WORKFLOW" title={'From "what is happening?" to "what should we do next?"'} />

      <div className="executive-flow">
        <div className="flow">
          <div className="flow-step active">
            <strong>Business signals</strong>
            <span>Inventory • Orders • Demand • Pro • Delivery</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step ai">
            <strong>Decision engine</strong>
            <span>Rules • AI • Optimization • Prioritization</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step active">
            <strong>Action</strong>
            <span>Replenish • Reallocate • Expedite • Escalate</span>
          </div>
        </div>
      </div>

      <SectionHeader
        label="REAL-WORLD SCENARIO"
        title="What happens when a store gets hit by competing demand?"
        description="The system continuously evaluates commitments instead of treating each event independently."
      />

      <div className="grid-2">
        <div className="pain-list">
          {SIGNALS.map((s) => (
            <div className="pain-item" key={s.title}>
              <div className="pain-mark" style={{ background: "#eff6ff", color: "var(--blue)" }}>
                ●
              </div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Card icon="AI" iconBg="#eff6ff" title="Recommended action plan">
          <strong>1.</strong> Protect inventory for the Pro commitment.
          <br />
          <strong>2.</strong> Reallocate available units from a nearby store.
          <br />
          <strong>3.</strong> Trigger replenishment from the optimal node.
          <br />
          <strong>4.</strong> Move available associate capacity to fulfillment.
          <br />
          <strong>5.</strong> Escalate only the remaining critical exception.
          <br />
          <br />
          <b style={{ color: "var(--green)" }}>
            Outcome: protect commitments before the customer experiences the failure.
          </b>
        </Card>
      </div>

      <SectionHeader
        label="ENTERPRISE FIT"
        title="Connect and orchestrate. Don't replace."
        description="The platform can consume outputs from existing Home Depot systems and turn them into an operational decision stream."
      />

      <div className="console-box">
        <pre>
          <span className="accent">HOME DEPOT EXISTING ECOSYSTEM</span>
          {`
POS / Inventory / OMS / WMS / Forecasting / Fulfillment / Pro / Store signals
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │  AUTONOMOUS STORE         │
                         │  DECISION ENGINE          │
                         │                           │
                         │  • Signal fusion          │
                         │  • Risk detection         │
                         │  • Prioritization         │
                         │  • Optimization           │
                         │  • Business rules         │
                         └────────────┬──────────────┘
                                      │
                                      ▼
`}
          <span className="accent">RECOMMENDED ACTION</span>
          {`
                                      │
                   ┌──────────────────┼──────────────────┐
                   ▼                  ▼                  ▼
              Associate          Fulfillment          Manager
               action              action           escalation`}
        </pre>
      </div>

      <SectionHeader
        label="DECISION SIMULATION"
        title="Show leadership what happens if the store does nothing."
        description="Move beyond alerts: quantify the consequence of waiting and compare alternative interventions before execution."
      />

      <div className="grid-2">
        <Card icon="NOW" iconBg="#f1f5f9" title="Do nothing">
          12 potential stockouts • 7 Express risks • 3 Pro delays • rising sales and service
          exposure.
        </Card>
        <Card icon="ACT" iconBg="#d1fae5" title="Recommended intervention" className="card-accent-green">
          Transfer inventory + expedite replenishment + reprioritize fulfillment capacity → fewer
          failures and protected commitments.
        </Card>
      </div>

      <div style={{ height: 18 }} />

      <div className="grid-3">
        <div className="metric-card">
          <div className="metric-number">95</div>
          <div className="metric-label">Example decision score: nearby-store transfer</div>
        </div>
        <div className="metric-card purple">
          <div className="metric-number">82</div>
          <div className="metric-label">Alternative: expedited RDC replenishment</div>
        </div>
        <div className="metric-card red">
          <div className="metric-number">18</div>
          <div className="metric-label">Alternative: delay a committed Pro order</div>
        </div>
      </div>

      <SectionHeader label="BUSINESS OUTCOMES" title="Measure the product by business impact" />

      <div className="grid-3">
        {ROI_ITEMS.map((r) => (
          <Card key={r.title} title={r.title}>
            {r.text}
          </Card>
        ))}
      </div>

      <BoardMessage title="The Autonomous Store">
        <b>Sense → Decide → Act → Learn.</b> Move store operations from reactive task management
        toward continuous, context-aware decisioning while keeping associates and managers in
        control.
      </BoardMessage>

      <p style={{ marginTop: 22, color: "var(--muted)", fontSize: 12, lineHeight: 1.6 }}>
        Public-source positioning note: this page does not claim that Home Depot lacks
        undisclosed internal capabilities. It identifies a potential white space based on
        publicly described capabilities and proposes a complementary decision layer.
      </p>
    </section>
  );
}
