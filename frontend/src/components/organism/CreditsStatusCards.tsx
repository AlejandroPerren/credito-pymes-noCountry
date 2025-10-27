"use client";

import SolicitudStatusCard from "../molecules/CreditStatusCard";
import { useCreditsCount } from "@/utils/hooks/useCreditsCount";

export default function CreditsStatusCards() {
  const { creditsCounts } = useCreditsCount();

  return (
    <div className="flex justify-between gap-brand-md">
      {creditsCounts.map((item, i) => (
        <SolicitudStatusCard key={i} label={item.label} count={item.count}>
          {item.icon}
        </SolicitudStatusCard>
      ))}
    </div>
  );
}
