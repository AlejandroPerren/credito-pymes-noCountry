import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Benefits() {
  return (
    <div className="max-w-[1440px] m-auto flex justify-center gap-brand-xl p-brand-3xl" id="benefits">
      <Image
        src="/png/benefices-image.png"
        alt="beneficiaries"
        width={644}
        height={443}
        className="w-full h-auto object-contain"
      />
      <div className="flex flex-col gap-brand-lg w-full py-[82px]">
        <h1 className="heading-2">Diseñado para PYMEs como la tuya</h1>
        <ul className="flex flex-col gap-brand-md">
          <li className="flex gap-brand-sm">
            <div className="flex">
              <CircleCheck className="text-success" width={24} height={24} />
            </div>
            <p className="font-medium leading-[2]">
              Sin papeleos interminables Todo proceso es 100% digital. Olvidate de las colas y los trámites
              presenciales.
            </p>
          </li>

          <li className="flex gap-brand-sm">
            <div className="flex">
              <CircleCheck className="text-success" width={24} height={24} />
            </div>
            <p className="font-medium leading-[2]">
              Respuestas en tiempo récord Nuestro sistema automatizado te da una respuesta en minutos, no en semanas.
            </p>
          </li>

          <li className="flex gap-brand-sm">
            <div className="flex">
              <CircleCheck className="text-success" width={24} height={24} />
            </div>
            <p className="font-medium leading-[2]">
              Transparencia total Sin letra chica ni sorpresas. Conoce todos los términos antes de firmar.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
