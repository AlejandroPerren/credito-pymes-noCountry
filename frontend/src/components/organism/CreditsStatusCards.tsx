"use client";

import { creditsCounts } from "@/utils/consts/creditsCounts";
import SolicitudStatusCard from "../molecules/CreditStatusCard";
import { useState } from "react";

export default function CreditsStatusCards() {
  const [cards] = useState(creditsCounts);

  return (
    <div className="flex justify-between gap-brand-md">
      {cards.map((item, i) => (
        <SolicitudStatusCard key={i} label={item.label} count={item.count}>
          {item.icon}
        </SolicitudStatusCard>
      ))}
    </div>
  );
}
