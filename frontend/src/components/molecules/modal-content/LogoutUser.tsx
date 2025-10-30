import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/store/globalContext";
import { logoutUser } from "@/store/globalContextActions";
import { useModal } from "@/store/modalContext";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export default function LogoutUser() {
  const { dispatch: modalDispatch } = useModal();
  const { dispatch: globalDispatch } = useGlobalContext();

  function closeModal() {
    modalDispatch({ type: "CLOSE_MODAL" });
  }

  function logOut() {
    globalDispatch(logoutUser());
    closeModal();
    localStorage.clear();
    redirect("/");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-brand-md">
        <LogOut size={48} className="text-error" />
        <div className="flex flex-col text-center gap-brand-sm">
          <h4 className="heading-4">¿Cerrar sesión?</h4>
          <p className="paragrapg-small text-placeholder-text">
            Estás a punto de cerrar sesión. Tendrás que volver a iniciar sesión para acceder a tu cuenta.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-brand-md">
        <Button variant="outline" onClick={closeModal}>
          Cancelar
        </Button>
        <Button variant="destructive" onClick={logOut}>
          Sí, cerrar sesión
        </Button>
      </div>
    </>
  );
}
