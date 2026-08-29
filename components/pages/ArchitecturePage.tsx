import { Hero } from "@/components/ui/Hero";
import { DiagramViewer } from "@/components/ui/DiagramViewer";
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
    </section>
  );
}
