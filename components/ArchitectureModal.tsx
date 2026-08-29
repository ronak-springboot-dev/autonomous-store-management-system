"use client";

import { useEffect } from "react";
import { architectureDescriptions, ArchNodeKey } from "@/lib/architectureData";

export function ArchitectureModal({
  activeKey,
  onClose,
}: {
  activeKey: ArchNodeKey | null;
  onClose: () => void;
}) {
  const data = activeKey ? architectureDescriptions[activeKey] : null;

  useEffect(() => {
    if (!activeKey) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeKey, onClose]);

  return (
    <div
      className={`modal-overlay${data ? " show" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {data && (
        <div className="modal" role="dialog" aria-modal="true">
          <button className="modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
          <div className="modal-label">ARCHITECTURE COMPONENT</div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}
