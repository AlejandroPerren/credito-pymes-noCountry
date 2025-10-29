import RouterBackBtn from "@/components/atoms/RouterBackBtn";
import UserProfileInfo from "@/components/organism/UserProfileInfo";
import { Button } from "@/components/ui/button";
import SuccessBanner from "@/components/ui/success-banner";
import { SquarePen } from "lucide-react";

export default function page() {
  return (
    <div className="flex flex-col gap-brand-xl p-brand-lg">
      <div className="flex gap-brand-sm">
        <RouterBackBtn />
        <div className="w-full">
          <h2 className="heading-2">Mi Perfil</h2>
        </div>
        <Button disabled>
          <SquarePen />
          Editar información
        </Button>
      </div>

      <SuccessBanner variant="stretch" size="large">
        <div className="flex flex-col gap-brand-sm">
          <p className="paragraph-medium">Tu verificación KYC fue validada con éxito</p>
          <p className="paragraph-small text-placeholder-text">Ya puedes acceder a todas las funciones.</p>
        </div>
      </SuccessBanner>

      <UserProfileInfo />
    </div>
  );
}
