"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LabeledInput as AuthInput } from "@/components/molecules/LabeledInput";
import { TEXTS } from "@/utils/consts/register";
import { RegisterFormData, registerSchema } from "@/utils/types/register";
import Link from "next/link";
import { ROUTES } from "@/utils/config/routesApp/routes";
import { useNavigateApp } from "@/utils/hooks/useNavigate";
import { apiFetch } from "@/network/utils/FetchApi";

export const AuthFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { toDashboard } = useNavigateApp();

  const onSubmit = async (data: RegisterFormData) => {
    const [firstName, ...lastName] = data.name.split(' ');
    const response = await apiFetch('/users', {
      method: 'POST',
      body: {
        dni: data.dni,
        firstName,
        lastName: "Holaa",
        email: data.email,
        password: data.password,
      },
    });
    console.log('Registration response:', response);
    if (response.ok) {
      // For now, just redirect to dashboard. Later we can redirect to login.
      toDashboard();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <AuthInput
          id="name"
          label={TEXTS.labels.name}
          placeholder={TEXTS.placeholders.name}
          register={register("name")}
          error={errors.name?.message}
        />
        <AuthInput
          id="dni"
          label={TEXTS.labels.dni}
          placeholder={TEXTS.placeholders.dni}
          register={register("dni")}
          error={errors.dni?.message}
        />
      </div>

      <AuthInput
        id="email"
        label={TEXTS.labels.email}
        placeholder={TEXTS.placeholders.email}
        register={register("email")}
        error={errors.email?.message}
      />

      <AuthInput
        id="password"
        label={TEXTS.labels.password}
        type="password"
        placeholder={TEXTS.placeholders.password}
        register={register("password")}
        error={errors.password?.message}
      />
      <AuthInput
        id="confirmPassword"
        label={TEXTS.labels.confirmPassword}
        type="password"
        placeholder={TEXTS.placeholders.confirmPassword}
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <Separator />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? TEXTS.buttons.submitting : TEXTS.buttons.submit}
      </Button>

      <p className="text-sm text-center text-gray-400 my-2">
        {TEXTS.links.haveAccount}{" "}
        <Link
          href={ROUTES.AUTH.LOGIN}
          className="text-blue-400 hover:underline"
        >
          {TEXTS.links.login}
        </Link>
      </p>

      <p className="text-xs text-center text-gray-500">
        {TEXTS.links.termsPrefix}{" "}
        <Link
          href={ROUTES.HELP.TERMS}
          className="text-blue-400 hover:underline"
        >
          {TEXTS.links.terms}
        </Link>
        .
      </p>
    </form>
  );
};
