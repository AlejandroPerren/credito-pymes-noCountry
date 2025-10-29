import { Button } from "../ui/button";
import { PUBLIC_NAV_ITEMS } from "@/utils/consts/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavBarLogo from "../atoms/NavBarLogo";
import CreateAccountBtn from "../atoms/CreateAccountBtn";

export default function NavBar() {
  return (
    <nav className="flex items-center px-brand-3xl py-brand-md">
      <div className={cn("flex gap-3 w-full")}>
        <NavBarLogo />
        <div className="flex items-center px-brand-sm">
          <legend className="heading-4">Fintech Pyme</legend>
        </div>
      </div>

      <div className="flex px-brand-lg gap-brand-lg">
        {PUBLIC_NAV_ITEMS.map((item) => (
          <Button size="lg" key={item.label} variant="ghost" asChild>
            <Link href={item.link}>{item.label}</Link>
          </Button>
        ))}
      </div>

      <div className="flex gap-brand-lg">
        <Button size="lg" variant="outline" asChild>
          <Link href="/login">Iniciar Sesión</Link>
        </Button>
        <CreateAccountBtn>Crear Cuenta</CreateAccountBtn>
      </div>
    </nav>
  );
}
