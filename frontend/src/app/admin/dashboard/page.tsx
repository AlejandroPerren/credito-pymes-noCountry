"use client";

import NewCreditsPanel from "@/components/molecules/NewCreditsPanel";
import CreditsCards from "@/components/organism/CreditsCards";
import CreditsStatusCards from "@/components/organism/CreditsStatusCards";

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col gap-brand-2xl px-brand-lg py-brand-xl overflow-y-hidden">
      <div className="flex flex-col gap-brand-md">
        <h2 className="heading-2">Dashboard</h2>
        <p className="paragraph-regular text-placeholder-text">Resumen de actividad y métricas</p>
      </div>

      <CreditsStatusCards />

      <NewCreditsPanel />

      <CreditsCards variant="new" />
    </div>
  );
}
