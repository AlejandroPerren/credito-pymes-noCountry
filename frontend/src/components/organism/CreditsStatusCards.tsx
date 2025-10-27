"use client";

import CreditStatusCard from "../molecules/CreditStatusCard";
import { useCreditsCount } from "@/utils/hooks/useCreditsCount";

export default function CreditsStatusCards() {
  const { creditsCounts } = useCreditsCount();

  return (
    <div className="flex justify-between gap-brand-md">
      {creditsCounts.map((item, i) => (
        <CreditStatusCard key={i} label={item.label} count={item.count}>
          {item.icon}
        </CreditStatusCard>
      ))}
    </div>
  );
}
