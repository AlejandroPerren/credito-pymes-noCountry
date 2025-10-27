import { AuthCard } from "@/components/molecules/AuthCard";
import { AuthFormLogin } from "@/components/organism/AuthFormLogin";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-background mb-20">
      <AuthCard title="Inicia sesión">
        <AuthFormLogin />
      </AuthCard>
    </div>
  );
}
