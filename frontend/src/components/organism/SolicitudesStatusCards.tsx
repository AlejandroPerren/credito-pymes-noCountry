"use client";

import { solicitudesCounts } from "@/utils/consts/solicitudesCounts";
import SolicitudStatusCard from "../molecules/SolicitudStatusCard";
import { useState } from "react";

export default function SolicitudesStatusCards() {
  const [cards] = useState(solicitudesCounts);

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
