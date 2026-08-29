"use client";

import { useState } from "react";
import { Sidebar, PageId } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { ArchitectureModal } from "@/components/ArchitectureModal";
import { ArchNodeKey } from "@/lib/architectureData";

import { ProblemStatementPage } from "@/components/pages/ProblemStatementPage";
import { OverviewPage } from "@/components/pages/OverviewPage";
import { ArchitecturePage } from "@/components/pages/ArchitecturePage";
import { FunctionalRequirementsPage } from "@/components/pages/FunctionalRequirementsPage";
import { AgentsPage } from "@/components/pages/AgentsPage";
import { ScenarioPage } from "@/components/pages/ScenarioPage";
import { DifferentiationPage } from "@/components/pages/DifferentiationPage";

export default function Home() {
  const [activePage, setActivePage] = useState<PageId>("problem");
  const [activeModalKey, setActiveModalKey] = useState<ArchNodeKey | null>(null);

  function navigate(id: PageId) {
    setActivePage(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="app">
      <Sidebar activePage={activePage} onNavigate={navigate} />

      <main className="main">
        <Topbar />

        <div className="content">
          {activePage === "problem" && <ProblemStatementPage />}
          {activePage === "overview" && <OverviewPage />}
          {activePage === "architecture" && (
            <ArchitecturePage onNodeClick={setActiveModalKey} />
          )}
          {activePage === "requirements" && <FunctionalRequirementsPage />}
          {activePage === "agents" && <AgentsPage />}
          {activePage === "scenario" && <ScenarioPage />}
          {activePage === "usp" && <DifferentiationPage />}
        </div>
      </main>

      <ArchitectureModal activeKey={activeModalKey} onClose={() => setActiveModalKey(null)} />
    </div>
  );
}
