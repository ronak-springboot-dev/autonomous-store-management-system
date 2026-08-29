# Autonomous Retail Store Manager — Executive Presentation

A Next.js (App Router, TypeScript) rebuild of the board-level executive presentation for the
**Autonomous Retail Store Manager** — a SKU-level multi-agent system where Sales Forecast,
Inventory Analysis, and Price Optimization agents continuously process billing, inventory and
pricing data to predict demand, track stock depletion, flag stockout/overstock risk, and
recommend the next-best action.

The original single-file version is kept for reference at
[`autonomous_retail_manager_board.html`](./autonomous_retail_manager_board.html).

Branded for **INTELERA** (logo in `public/intelera-logo.svg` / `intelera-logo-light.svg`,
favicon in `public/favicon.png`, brand color tokens in `app/globals.css`, Manrope typeface) —
all extracted from [intelera.tech](https://www.intelera.tech/).

## Pages

1. **Problem Statement** — the fragmentation problem and its business consequences.
2. **Executive Overview** — the solution, in board-level language.
3. **Architecture & Flow** — the end-to-end data → agents → decision → action pipeline (click any
   node for detail).
4. **Functional Requirements** — the system's capability checklist (FR-1…FR-18) plus
   non-functional requirements.
5. **AI Intelligence** — the three specialist agents and how they converge on a decision.
6. **Business Scenario** — a worked stockout-prediction example.
7. **Strategic Differentiation** — competitive positioning and six strategic advantages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build check

```bash
npm run build
```

## Regenerating the architecture diagram

The Architecture & Flow page's diagram is authored in PlantUML at
[`diagrams/architecture.puml`](diagrams/architecture.puml) and pre-rendered to a static,
checked-in SVG at `public/architecture-diagram.svg` (loaded and pan/zoomed client-side, with
clicks on each node wired to the existing detail modal via `lib/architectureData.ts`).

To change the diagram: edit `diagrams/architecture.puml`, then regenerate the SVG:

```bash
powershell -ExecutionPolicy Bypass -File scripts/render-diagram.ps1
```

This calls PlantUML's public rendering server — no local Java/PlantUML install needed. Keep
each node's `as ALIAS` and `[[#ALIAS]]` link in sync with the `ArchNodeKey` values in
[`lib/architectureData.ts`](lib/architectureData.ts) so node clicks keep resolving to the
right detail text.

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (link or create a project, accept the detected Next.js settings), then run
`vercel --prod` to deploy to production.

**Option B — Git-based deploy**

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Deploy.

Every subsequent push to the connected branch redeploys automatically.
