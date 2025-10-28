"use client";

import { useUserContext } from "@/store/userContext";
import { FileText } from "lucide-react";
import UserCreditCard from "../molecules/UserCreditCard";

export default function UserActiveCredits() {
  const {
    state: { credits },
  } = useUserContext();

  const activeCredits = credits.filter(
    (credit) => credit.status !== "APPROVED" && credit.status !== "REJECTED" && credit.status !== "CANCELED"
  );

  return (
    <div className="h-full flex flex-col gap-brand-lg overflow-hidden">
      <div className="flex flex-col gap-brand-md">
        <div className="flex gap-brand-sm">
          <FileText size={20} />
          <p>Tus Solicitudes Activas</p>
        </div>

        <p className="text-muted-foreground">Estado de tus solicitudes más recientes</p>
      </div>

      <div className="flex flex-col gap-brand-lg pb-20 overflow-auto">
        {activeCredits.map((credit) => (
          <UserCreditCard key={credit.id} credit={credit} />
        ))}
      </div>
    </div>
  );
}
