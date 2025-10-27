"use client";

import { useAdminContext } from "@/store/adminContext";
import { notFound, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import StatusLabel from "../atoms/StatusLabel";

export default function CreditAdminDetailsHeader({ id }: { id: number }) {
  const { state } = useAdminContext();
  const router = useRouter();

  const credit = state.credits.find((credit) => credit.id === id);

  if (!credit) return notFound();

  return (
    <div className="flex gap-brand-lg">
      <Button variant="ghost" onClick={() => router.back()}>
        <ArrowLeft />
        ...
      </Button>

      <div className="flex gap-brand-md">
        <div className="flex flex-col gap-brand-md">
          <h4 className="heading-4">Solicitud de crédito {credit.id}</h4>
          <p className="paragraph-regular text-placeholder-text">{credit.company.businessName}</p>
        </div>
      </div>

      <StatusLabel status={credit.status} />
    </div>
  );
}
