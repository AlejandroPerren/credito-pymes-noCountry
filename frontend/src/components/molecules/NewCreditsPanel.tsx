"use client";

import { useAdminContext } from "@/store/adminContext";
import { TrendingUpDown } from "lucide-react";

export default function NewCreditsPanel() {
  const {
    state: {
      credits: { data },
    },
  } = useAdminContext();

  const newCreditsNum = data.filter((item) => item.status === "NEW").length;

  return (
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
  );
}
