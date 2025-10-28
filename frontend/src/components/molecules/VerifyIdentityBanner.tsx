import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function VerifyIdentityBanner() {
  return (
    <div className="w-[80%] flex gap-brand-md rounded-brand-lg border-1 border-l-4 border-star bg-popover m-auto p-brand-lg">
      <CircleAlert className="text-star" />
      <div className="w-full flex flex-col">
        <p className="paragraph-medium">Verificación de identidad pendiente</p>
        <p className="paragraph-small text-muted-foreground">Para acceder a todas las funciones, necesitamos verificar tu identidad..</p>
      </div>
      <Button variant="secondary" asChild>
        <Link href="/user/identity">Verificar Identidad</Link>
      </Button>
    </div>
  );
}
