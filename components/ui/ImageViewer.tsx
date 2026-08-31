"use client";

import { useEffect, useState } from "react";
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
      <button
        type="button"
        className="diagram-expand-btn"
        onClick={onToggleExpand}
        aria-label={expanded ? "Collapse image" : "Expand image"}
      >
        {expanded ? "✕ Close" : "⤢ Expand"}
      </button>
    </div>
  );
}

/**
 * Pan/zoom viewer for a raster diagram. Shares the `.diagram-*` styling with
 * DiagramViewer, which handles inlined SVG (and its clickable nodes) instead.
 */
export function ImageViewer({ src, alt }: { src: string; alt: string }) {
  const [expanded, setExpanded] = useState(false);

  // Lock page scroll and allow Escape to exit while expanded to fill the page.
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

  return (
    <div className={`diagram-viewer image-viewer${expanded ? " expanded" : ""}`}>
      <TransformWrapper minScale={0.3} maxScale={6} initialScale={1} centerOnInit doubleClick={{ mode: "zoomIn" }}>
        <Controls expanded={expanded} onToggleExpand={() => setExpanded((v) => !v)} />
        <TransformComponent wrapperClass="diagram-canvas" contentClass="diagram-canvas-content">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="diagram-image" src={src} alt={alt} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
