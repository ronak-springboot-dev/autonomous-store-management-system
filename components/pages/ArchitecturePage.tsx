import { Hero } from "@/components/ui/Hero";
import { DiagramViewer } from "@/components/ui/DiagramViewer";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArchNodeKey, architectureDescriptions } from "@/lib/architectureData";

export function ArchitecturePage({ onNodeClick }: { onNodeClick: (key: ArchNodeKey) => void }) {
  return (
    <section className="page">
      <Hero
        eyebrow="OPERATING ARCHITECTURE"
        title="How the Autonomous Store Thinks"
        text="Every billing transaction and inventory movement continuously updates the live state of each SKU. Three specialist AI agents then reason in parallel before a final decision is made."
        message="Scroll to zoom, drag to pan, and click any node to see its business role."
      />

      <div className="diagram-frame">
        <DiagramViewer
          src="/architecture-diagram.svg"
          onNodeClick={(key) => {
            if (key in architectureDescriptions) {
              onNodeClick(key as ArchNodeKey);
            }
          }}
        />
      </div>

      <SectionHeader
        label="END-TO-END ARCHITECTURE"
        title="From Real-time Events to Autonomous Actions"
        description="The full operating stack with closed-loop learning — seven layers that carry a billing event through the SKU Digital Twin, the agent fleet and the decision & autonomy layer into an executed action, then feed the measured outcome back into the models."
      />

      <div className="diagram-frame">
        <ImageViewer
          src="/Autonomous-Retail-Store-Architecture-4K.png"
          alt="Autonomous Retail Store Manager end-to-end architecture: data sources, ingestion and data layer, SKU digital twin, AI agent layer, decision and autonomy layer, execution layer, and outcomes with closed-loop learning."
        />
      </div>
    </section>
  );
}
