"use client";

import { useAdminContext } from "@/store/adminContext";
import { notFound } from "next/navigation";
import StatusLabel from "../atoms/StatusLabel";
import RouterBackBtn from "../atoms/RouterBackBtn";

export default function CreditAdminDetailsHeader({ id }: { id: number }) {
  const {
    state: {
      credits: { data },
    },
  } = useAdminContext();

  const credit = data.find((credit) => credit.id === id);

  if (!credit) return notFound();

  return (
    <div className="flex gap-brand-lg">
      <RouterBackBtn />

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
