"use client";

import { useUserContext } from "@/store/userContext";
import { Button } from "../ui/button";
import { useState } from "react";
import UserCreditsCards from "./UserCreditsCards";

export default function UserCredits() {
  const {
    state: { credits },
  } = useUserContext();
  const [state, setState] = useState<"active" | "completed">("active");

  const activeCredits = credits.filter(
    (credit) => credit.status !== "APPROVED" && credit.status !== "REJECTED" && credit.status !== "CANCELED"
  );

  const completedCredits = credits.filter(
    (credit) => credit.status === "APPROVED" || credit.status === "REJECTED" || credit.status === "CANCELED"
  );

  return (
    <div className="flex flex-col items-start gap-brand-lg overflow-hidden">
      <div className="flex gap-brand-sm rounded-brand-lg bg-card p-brand-sm">
        <Button variant={state === "active" ? "default" : "ghost"} onClick={() => setState("active")}>
          Activas
        </Button>
        <Button variant={state === "completed" ? "default" : "ghost"} onClick={() => setState("completed")}>
          Completadas
        </Button>
      </div>

      <UserCreditsCards credits={state === "active" ? activeCredits : completedCredits} />
    </div>
  );
}
