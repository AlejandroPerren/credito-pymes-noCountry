"use client";

import { useAdminContext } from "@/store/adminContext";
import CreditCard from "../molecules/CreditCard";

export default function CreditsCards({ variant }: { variant: "new" | "all" }) {
  const { state } = useAdminContext();

  const credits = variant === "new" ? state.credits.filter((credit) => credit.status === "NEW") : state.credits;

  return (
    <div className="h-full flex flex-col gap-brand-sm overflow-y-auto pb-20">
      {credits.map((credit) => (
        <CreditCard key={credit.id} credit={credit} />
      ))}
    </div>
  );
}
