import { CircleCheck } from "lucide-react";

export default function UserNeeds() {
  return (
    <div className="w-full flex flex-col items-center gap-brand-lg">
      <h4 className="heading-4">¿Qué necesitas para tu solicitud?</h4>

      <div className="flex flex-col gap-brand-md">
        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex gap-2.5">
            <CircleCheck className="text-success" />
            <p>Información básica de tu empresa.</p>
          </div>
          <div className="flex gap-2.5">
            <CircleCheck className="text-success" />
            <p>Estados financieros recientes.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex gap-2.5">
            <CircleCheck className="text-success" />
            <p>Identificación oficial.</p>
          </div>
          <div className="flex gap-2.5">
            <CircleCheck className="text-success" />
            <p>Comprobante de domicilio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
