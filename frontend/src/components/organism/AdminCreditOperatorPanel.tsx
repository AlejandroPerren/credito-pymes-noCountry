"use client";

import { selectStatus } from "@/utils/consts/credits";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useAdminContext } from "@/store/adminContext";
import { Button } from "../ui/button";

export default function AdminCreditOperatorPanel({ id }: { id: number }) {
  const {
    state: {
      credits: { data },
    },
  } = useAdminContext();

  const credit = data.find((credit) => credit.id === id);

  if (!credit) return <></>;

  const statusPlaceholder = selectStatus.find((item) => item.status === credit.status)?.label;

  return (
    <div className="w-200 flex flex-col gap-brand-lg rounded-brand-lg bg-popover p-brand-lg">
      <h4 className="heading-4">Dictamen Final</h4>

      <div className="flex flex-col gap-brand-sm">
        <p className="paragraph-small text-placeholder-text">Cambiar estado general de la solicitud:</p>
        <Select>
          <SelectTrigger className="bg-input w-full">
            <SelectValue className="bg-input" placeholder={statusPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {selectStatus.map((status) => (
              <SelectItem key={status.status} value={status.status}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-brand-sm">
        <p className="paragraph-small text-placeholder-text">Motivo del Rechazo (será visible para el cliente)</p>
        <Textarea />
      </div>

      <div className="flex flex-col gap-brand-sm text-center">
        <Button>Guardar cambios</Button>
        <p className="paragraph-mini text-placeholder-text">
          Completa todas las verificaciones y selecciona un estado final
        </p>
      </div>
    </div>
  );
}
