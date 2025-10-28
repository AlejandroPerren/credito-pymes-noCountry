import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import UserCredits from "@/components/organism/UserCredits";
import Link from "next/link";

export default function UserSolicitudesPage() {
  return (
    <div className="h-full flex flex-col gap-brand-2xl p-brand-lg">
      <div className="flex flex-col gap-brand-md">
        <h3 className="heading-3">Mis Solicitudes</h3>
        <div className="flex items-center">
          <p className="w-full text-muted-foreground">Gestiona y revisa todas tus solicitudes de crédito</p>
          <Button asChild>
            <Link href="/user/solicitudes/nueva">
              <Plus /> Nueva solicitud
            </Link>
          </Button>
        </div>
      </div>

      <UserCredits />
    </div>
  );
}
