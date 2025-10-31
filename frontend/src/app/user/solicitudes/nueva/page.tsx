import { LabeledInput } from "@/components/molecules/LabeledInput";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NuevaSolicitud() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Nueva Solicitud de Crédito</h1>
      <form className="space-y-6">
        <LabeledInput
          label="Título"
          id="titulo"
          placeholder="Ej. Préstamo para capital de trabajo"
        />
        <LabeledInput
          label="Razón o Descripción"
          id="descripcion"
          placeholder="Describa el propósito del crédito"
        />
        <div>
          <label
            htmlFor="cuotas"
            className="block text-sm font-medium text-gray-700"
          >
            Cuotas a pagarlo
          </label>
          <Select>
            <SelectTrigger id="cuotas">
              <SelectValue placeholder="Seleccione el número de cuotas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 meses</SelectItem>
              <SelectItem value="6">6 meses</SelectItem>
              <SelectItem value="12">12 meses</SelectItem>
              <SelectItem value="18">18 meses</SelectItem>
              <SelectItem value="24">24 meses</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label
            htmlFor="monto"
            className="block text-sm font-medium text-gray-700"
          >
            Monto a solicitar
          </label>
          <Select>
            <SelectTrigger id="monto">
              <SelectValue placeholder="Seleccione el monto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500000">$500.000 (2% de interés)</SelectItem>
              <SelectItem value="1000000">
                $1.000.000 (5% de interés)
              </SelectItem>
              <SelectItem value="2000000">
                $2.000.000 (7% de interés)
              </SelectItem>
              <SelectItem value="5000000">
                $5.000.000 (10% de interés)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Enviar Solicitud</Button>
      </form>
    </div>
  );
}
