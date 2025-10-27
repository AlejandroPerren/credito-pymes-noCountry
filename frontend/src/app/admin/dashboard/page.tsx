"use client";

import NewCreditsPanel from "@/components/molecules/NewCreditsPanel";
import CreditsStatusCards from "@/components/organism/CreditsStatusCards";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-brand-2xl px-brand-lg py-brand-xl">
      <div className="flex flex-col gap-brand-md">
        <h2 className="heading-2">Dashboard</h2>
        <p className="paragraph-regular text-placeholder-text">Resumen de actividad y métricas</p>
      </div>

      <CreditsStatusCards />

      <NewCreditsPanel />
    </div>
  );
}
