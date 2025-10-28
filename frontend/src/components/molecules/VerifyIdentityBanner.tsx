import { Button } from "../ui/button";
import Link from "next/link";
import AlertBanner from "../ui/alert-banner";

export default function VerifyIdentityBanner() {
  return (
    <AlertBanner>
      <div className="flex gap-brand-md">
        <div className="w-full flex flex-col">
          <p className="paragraph-medium">Verificación de identidad pendiente</p>
          <p className="paragraph-small text-muted-foreground">
            Para acceder a todas las funciones, necesitamos verificar tu identidad..
          </p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/user/identity">Verificar Identidad</Link>
        </Button>
      </div>
    </AlertBanner>
  );
}
