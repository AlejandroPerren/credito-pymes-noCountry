"use client";

import { useGlobalContext } from "@/store/globalContext";
import { Card } from "../ui/card";
import { ShieldCheck, Timer, Headphones, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UserWelcome() {
  const {
    state: { loggedUser },
  } = useGlobalContext();

  return (
    <div className="flex flex-col items-center gap-brand-xl">
      <div className="flex flex-col items-center gap-brand-md">
        <h3 className="heading-3">Bienvenido, {loggedUser?.username}</h3>
        <p className="text-muted-foreground">
          Estás listo para inicar tu primera solicitud de crédito. Nuestro proceso es simple, seguro y diseñado
          especialmente para PYMEs como la tuya.
        </p>
      </div>

      <div className="flex items-center gap-brand-xl">
        <Card className="w-2xs items-center">
          <div className="flex">
            <ShieldCheck size={40} />
          </div>
          <div className="flex flex-col items-center gap-brand-sm">
            <h4 className="heading-4">Proceso Rápido </h4>
            <p className="paragraph-small text-muted-foreground text-center">
              Completa tu solicitud en menos de 10 minutos
            </p>
          </div>
        </Card>

        <Card className="w-2xs items-center">
          <div className="flex">
            <Timer size={40} />
          </div>
          <div className="flex flex-col items-center gap-brand-sm">
            <h4 className="heading-4">100% Seguro</h4>
            <p className="paragraph-small text-muted-foreground text-center">
              Tus datos están protegidos con encriptación avanzada
            </p>
          </div>
        </Card>

        <Card className="w-2xs items-center">
          <div className="flex">
            <Headphones size={40} />
          </div>
          <div className="flex flex-col items-center gap-brand-sm">
            <h4 className="heading-4">Soporte 24/7</h4>
            <p className="paragraph-small text-muted-foreground text-center">Te acompañamos en cada paso del proceso</p>
          </div>
        </Card>
      </div>

      <div className="flex flex-col items-center gap-brand-lg">
        <Button>
          Comenzar Solicitud <ArrowRight />
        </Button>

        <p>¿Tienes dudas?</p>

        <Link href="#" className="text-link-text">
          Preguntas frecuentes
        </Link>
      </div>
    </div>
  );
}
