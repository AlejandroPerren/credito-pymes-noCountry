import { useModal } from "@/store/modalContext";
import { Button } from "../ui/button";
import { CircleUser, LogOut } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { SetStateAction } from "react";

export default function ProfilePanel({ setVisibility }: { setVisibility: React.Dispatch<SetStateAction<boolean>> }) {
  const { dispatch } = useModal();

  function openLogoutModal() {
    dispatch({ type: "OPEN_MODAL", payload: "logoutUser" });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute left-[-50%] top-[110%] right-0 flex flex-col gap-brand-sm rounded-brand-md border-1 border-border-input bg-popover p-brand-md"
    >
      <div className="flex flex-col gap-brand-md">
        <p className="paragraph-small-medium">Usuario</p>
        <p className="paragraph-mini text-muted-foreground">Mi cuenta</p>
      </div>
      <Button variant="ghost" asChild onClick={() => setVisibility(false)}>
        <Link href="/user/profile">
          <CircleUser />
          Mi perfil
        </Link>
      </Button>
      <Button variant="destructive" onClick={openLogoutModal}>
        <LogOut />
        Cerrar sesión
      </Button>
    </motion.div>
  );
}
