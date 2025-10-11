import Image from "next/image";
import { Button } from "../ui/button";
import { ShieldCheck, Timer, Headset } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex bg-popover px-brand-3xl py-brand-2xl">
      <div className="w-full flex flex-col items-start justify-center gap-brand-lg">
        <div className="flex flex-col gap-brand-md">
          <h1 className="heading-1">La financiación que tu PYME necesita, simple y 100% digital.</h1>
          <p className="paragraph-regular text-muted-foreground">
            Solicita créditos, sube tu documentación y recibe una respuesta en tiempo récord. Todo desde un solo lugar.
          </p>
        </div>
        <Button size="lg">Label</Button>
        <div className="flex gap-brand-sm">
          <div className="flex gap-brand-sm items-center">
            <ShieldCheck width={16} height={16} />
            <span className="paragraph-mini-medium">100% Seguro</span>
          </div>
          <div className="flex gap-brand-sm items-center">
            <Timer width={16} height={16} />
            <span className="paragraph-mini-medium">Respuesta inmediata</span>
          </div>
          <div className="flex gap-brand-sm items-center">
            <Headset width={16} height={16} />
            <span className="paragraph-mini-medium">Soporte 24/7</span>
          </div>
        </div>
      </div>

      <Image src="/png/hero-image.png" alt="hero-image" width={341.57} height={393.19} />
    </div>
  );
}
