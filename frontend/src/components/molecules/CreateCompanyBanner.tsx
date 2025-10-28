"use client";
import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { useModal } from "@/store/modalContext";

export default function CreateCompanyBanner() {
  const { dispatch } = useModal();

  const handleOpenModal = () => {
    dispatch({ type: "OPEN_MODAL", payload: "createCompany" });
  };

  return (
    <div className="w-[80%] flex gap-brand-md rounded-brand-lg border-1 border-l-4 border-star bg-popover m-auto p-brand-lg">
      <CircleAlert className="text-star" />
      <div className="w-full flex flex-col">
        <p className="paragraph-medium">Crear empresa</p>
        <p className="paragraph-small text-muted-foreground">Para acceder a todas las funciones, necesitamos que crees una empresa.</p>
      </div>
      <Button variant="secondary" onClick={handleOpenModal}>
        Crear Empresa
      </Button>
    </div>
  );
}
