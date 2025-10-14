import { AuthCard } from "@/components/molecules/AuthCard";
import { AuthEmailVerification } from "@/components/organism/AuthEmailVerification";
import { AuthFormLogin } from "@/components/organism/AuthFormLogin";
import { AuthFormRegister } from "@/components/organism/AuthFormRegister";

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-background mb-20">
      <AuthCard title="Crea tu cuenta">
        <AuthFormRegister />
      </AuthCard>

      <AuthCard title="Inicia sesión">
        <AuthFormLogin />
      </AuthCard>
      
      <AuthEmailVerification />
    </div>
  );
}
