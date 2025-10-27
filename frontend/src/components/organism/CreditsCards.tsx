"use client";

import { useAdminContext } from "@/store/adminContext";
import CreditCard from "../molecule/CreditCard";

export default function CreditsCards() {
  const {
    state: { credits },
  } = useAdminContext();

  return (
    <div className="h-full flex flex-col gap-brand-sm overflow-y-scroll pb-20">
      {credits.map((credit) => (
        <CreditCard key={credit.id} credit={credit} />
      ))}
    </div>
  );
}
