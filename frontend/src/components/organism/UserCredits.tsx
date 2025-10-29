"use client";

import { Button } from "../ui/button";
import UserCreditsCards from "./UserCreditsCards";
import { useState } from "react";
import { useUserContext } from "@/store/userContext";

export default function UserCredits() {
  const [state, setState] = useState<"active" | "completed">("active");
  const {
    state: { credits },
  } = useUserContext();

  const activeCredits = credits.data.filter(
    (credit) => credit.status !== "APPROVED" && credit.status !== "REJECTED" && credit.status !== "CANCELED"
  );

  const completedCredits = credits.data.filter(
    (credit) => credit.status === "APPROVED" || credit.status === "REJECTED" || credit.status === "CANCELED"
  );

  if (credits.data.length && credits.status === "idle")
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
