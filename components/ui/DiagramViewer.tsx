"use client";

import { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

function Controls({ expanded, onToggleExpand }: { expanded: boolean; onToggleExpand: () => void }) {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="diagram-controls">
      <button type="button" onClick={() => zoomOut()} aria-label="Zoom out">
        −
      </button>
      <button type="button" onClick={() => resetTransform()} aria-label="Reset zoom">
        Reset
      </button>
      <button type="button" onClick={() => zoomIn()} aria-label="Zoom in">
        +
      </button>
      <button type="button" className="diagram-expand-btn" onClick={onToggleExpand} aria-label={expanded ? "Collapse diagram" : "Expand diagram"}>
        {expanded ? "✕ Close" : "⤢ Expand"}
      </button>
    </div>
  );
}

export function DiagramViewer({
  src,
  onNodeClick,
}: {
  src: string;
  onNodeClick: (key: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setSvgMarkup(text);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !svgMarkup) return;

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("xlink:href") || anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      onNodeClick(href.slice(1));
    }

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [svgMarkup, onNodeClick]);

  // Lock page scroll and allow Escape to exit while the diagram is expanded to fill
  // the whole page.
  useEffect(() => {
    if (!expanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setExpanded(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded]);

  // Size the viewport box to the diagram's own aspect ratio (rather than a fixed
  // height), then scale the raw PlantUML SVG up to fill it. Collapsed, the box is
  // capped to a sensible in-page size; expanded, it uses the full viewport instead —
  // recomputed via ResizeObserver on `.diagram-viewer` (the ancestor whose size we
  // read, NOT the box we resize ourselves — observing our own target would
  // self-trigger in a loop) because the layout can still be settling after mount
  // (webfont swap, hero card reflow, sidebar breakpoint, or the expand toggle itself).
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !svgMarkup) return;

    const viewport = container.closest(".diagram-canvas") as HTMLElement | null;
    const outer = container.closest(".diagram-viewer") as HTMLElement | null;
    if (!viewport || !outer) return;

    const PADDING = 60;
    const MIN_HEIGHT = 340;
    const MAX_HEIGHT = 720;

    let rafId = 0;

    function applyFit() {
      const svg = container!.querySelector("svg");
      if (!svg) return;

      let svgW = parseFloat(svg.getAttribute("data-natural-width") || "");
      let svgH = parseFloat(svg.getAttribute("data-natural-height") || "");

      if (!svgW || !svgH) {
        const viewBox = svg.getAttribute("viewBox");
        if (viewBox) {
          const parts = viewBox.trim().split(/\s+/).map(Number);
          if (parts.length === 4 && parts[2] && parts[3]) {
            svgW = parts[2];
            svgH = parts[3];
          }
        }
        if (!svgW || !svgH) {
          svgW = parseFloat(svg.getAttribute("width") || "0");
          svgH = parseFloat(svg.getAttribute("height") || "0");
        }
        // Stash the natural (unscaled) size so re-runs never read back our own
        // already-scaled style/attribute values.
        svg.setAttribute("data-natural-width", String(svgW));
        svg.setAttribute("data-natural-height", String(svgH));
      }
      if (!svgW || !svgH) return;

      const outerWidth = outer!.clientWidth;
      if (outerWidth <= 0) return;

      let boxHeight: number;
      if (expanded) {
        // The outer wrapper is now a fixed full-viewport overlay — use its real
        // height directly instead of deriving one from the diagram's aspect ratio.
        boxHeight = outer!.clientHeight;
      } else {
        const contentW = outerWidth - PADDING;
        const idealBoxHeight = (contentW / svgW) * svgH + PADDING;
        boxHeight = Math.min(Math.max(idealBoxHeight, MIN_HEIGHT), MAX_HEIGHT);
      }
      if (boxHeight <= 0) return;

      const nextHeight = expanded ? "" : `${boxHeight}px`;
      if (viewport!.style.height !== nextHeight) {
        viewport!.style.height = nextHeight;
      }

      const finalCanvasHeight = viewport!.clientHeight || boxHeight;
      const availW = outerWidth - PADDING;
      const availH = finalCanvasHeight - PADDING;
      const maxScale = expanded ? 4 : 1.8;
      const scale = Math.min(availW / svgW, availH / svgH, maxScale);
      if (scale > 0 && Number.isFinite(scale)) {
        svg.style.width = `${svgW * scale}px`;
        svg.style.height = `${svgH * scale}px`;
      }
    }

    function scheduleFit() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyFit);
    }

    scheduleFit();

    const resizeObserver = new ResizeObserver(scheduleFit);
    resizeObserver.observe(outer);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [svgMarkup, expanded]);

  return (
    <div className={`diagram-viewer${expanded ? " expanded" : ""}`}>
      <TransformWrapper minScale={0.3} maxScale={5} initialScale={1} centerOnInit doubleClick={{ mode: "zoomIn" }}>
        <Controls expanded={expanded} onToggleExpand={() => setExpanded((v) => !v)} />
        <TransformComponent wrapperClass="diagram-canvas" contentClass="diagram-canvas-content">
          {svgMarkup ? (
            <div
              ref={containerRef}
              className="diagram-svg-host"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          ) : (
            <div className="diagram-loading">Loading diagram…</div>
          )}
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
