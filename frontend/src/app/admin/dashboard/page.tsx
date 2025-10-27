"use client";

import CreditsStatusCards from "@/components/organism/CreditsStatusCards";
import { mockCredits } from "@/utils/consts/credits";
import { TrendingUpDown } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [credits] = useState(mockCredits);

  const newCreditsNum = credits.filter((item) => item.status === "NEW").length;

  return (
    <div className="flex flex-col gap-brand-2xl px-brand-lg py-brand-xl">
      <div className="flex flex-col gap-brand-md">
        <h2 className="heading-2">Dashboard</h2>
        <p className="paragraph-regular text-placeholder-text">Resumen de actividad y métricas</p>
      </div>

      <CreditsStatusCards />

      <div className="flex gap-brand-md items-center rounded-brand-lg bg-popover px-brand-md py-brand-lg">
        <div className="w-full flex flex-col gap-brand-sm">
          <h4 className="heading-4">Estado del Sistema</h4>
          <p className="paragraph-small text-placeholder-text">
            Hay {newCreditsNum} solicitudes nuevas esperando asignación
          </p>
        </div>

        <div className="flex gap-brand-sm text-success">
          <div className="w-6 flex items-center justify-center aspect-square">
            <TrendingUpDown />
          </div>
          <span>+{newCreditsNum}</span>
        </div>
      </div>
    </div>
  );
}
