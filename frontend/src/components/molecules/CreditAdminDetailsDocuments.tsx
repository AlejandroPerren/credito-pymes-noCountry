import { FileText, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroupItem, RadioGroup } from "../ui/radio-group";

export default function CreditAdminDetailsDocuments() {
  return (
    <div className="w-full flex flex-col gap-brand-lg rounded-brand-lg bg-popover p-brand-lg">
      <h4 className="heading-4">Documentos</h4>

      <div className="flex flex-col gap-brand-md">
        <div className="flex flex-col gap-brand-md border-1 border-border-input rounded-brand-lg p-brand-lg">
          <div className="flex flex-col gap-brand-md">
            <div className="flex gap-brand-sm">
              <FileText />
              <p>INE del Representante</p>
            </div>

            <Button variant="outline" size="lg">
              <Eye />
              Ver documento
            </Button>
          </div>

          <RadioGroup>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-1">
                <RadioGroupItem value="valid" id="r1" />
                <label className="paragraph-small" htmlFor="r1">
                  Válido
                </label>
              </div>
              <div className="flex items-center gap-1">
                <RadioGroupItem value="invalid" id="r2" />
                <label className="paragraph-small" htmlFor="r2">
                  Inválido
                </label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-brand-md border-1 border-border-input rounded-brand-lg p-brand-lg">
          <div className="flex flex-col gap-brand-md">
            <div className="flex gap-brand-sm">
              <FileText />
              <p>Acta Constitutiva</p>
            </div>

            <Button variant="outline" size="lg">
              <Eye />
              Ver documento
            </Button>
          </div>

          <RadioGroup>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-1">
                <RadioGroupItem value="valid" id="r1" />
                <label className="paragraph-small" htmlFor="r1">
                  Válido
                </label>
              </div>
              <div className="flex items-center gap-1">
                <RadioGroupItem value="invalid" id="r2" />
                <label className="paragraph-small" htmlFor="r2">
                  Inválido
                </label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
