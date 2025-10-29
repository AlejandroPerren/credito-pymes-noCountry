"use client";

import { useAdminContext } from "@/store/adminContext";
import { notFound } from "next/navigation";

export default function CreditAdminDetailsCompany({ id }: { id: number }) {
  const {
    state: {
      credits: { data },
    },
  } = useAdminContext();

  const credit = data.find((credit) => credit.id === id);

  if (!credit) return notFound();

  return (
    <div className="w-full flex flex-col gap-brand-lg rounded-brand-lg bg-popover p-brand-lg">
      <h4 className="heading-4">Datos de la Empresa</h4>

      <div className="flex flex-col gap-brand-md">
        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Razón social</p>
            <p className="paragraph-small-medium">{credit.company.businessName}</p>
          </div>
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">CUIT / RFC</p>
            <p className="paragraph-small">{credit.company.taxId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Domicilio Fiscal</p>
            <p className="paragraph-small">{credit.company.adress}</p>
          </div>
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Sector / Industria</p>
            <p className="paragraph-small">SECTOR</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Teléfono</p>
            <p className="paragraph-small">{credit.company.phone}</p>
          </div>
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Monto Solicitado</p>
            <p className="paragraph-small">${credit.requestedAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
