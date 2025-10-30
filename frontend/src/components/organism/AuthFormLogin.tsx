"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LabeledInput as AuthInput } from "@/components/molecules/LabeledInput";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { TEXTS } from "@/utils/consts/login";
import { LoginFormData, loginSchema } from "@/utils/types/login";
import { ROUTES } from "@/utils/config/routesApp/routes";
import { apiFetch } from "@/network/utils/FetchApi";
import { redirect } from "next/navigation";
import { LoggedUser, LoggedUserStatus } from "@/utils/types/loggedUser";
import { useGlobalContext } from "@/store/globalContext";
import { loginUser, loginUserLoading } from "@/store/globalContextActions";
import { useEffect } from "react";

export const AuthFormLogin = () => {
  const {
    state: {
      loggedUser: { user, status },
    },
    dispatch,
  } = useGlobalContext();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const remember = watch("remember", false);

  const onSubmit = async (data: LoginFormData) => {
    const response = await apiFetch<{ role: LoggedUserStatus; firstname: string; lastname: string }>("/auth/login", {
      method: "POST",
      body: { email: data.email, pass: data.password },
    });

    if (response.ok && response.data) {
      const loggedUser: LoggedUser = {
        username: `${response.data.firstname} ${response.data.lastname}`,
        role: response.data.role,
      };

      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      dispatch(loginUserLoading());
      dispatch(loginUser(loggedUser));
    } else {
      // Handle login error
      console.error("Login failed:", response.error);
    }
  };

  useEffect(() => {
    if (user && status !== "loading") {
      if (user.role === "ADMIN") {
        redirect("/admin");
      }

      if (user.role === "USER") {
        redirect("/user");
      }
    }
  }, [user, status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AuthInput
        id="email"
        label={TEXTS.labels.email}
        type="email"
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

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={remember}
            onCheckedChange={(checked) => setValue("remember", checked as boolean)}
          />
          <label htmlFor="remember" className="text-gray-300 cursor-pointer select-none">
            {TEXTS.labels.remember}
          </label>
        </div>

        <Link href="/forgot-password" className="text-blue-400 hover:underline font-medium">
          {TEXTS.links.forgotPassword}
        </Link>
      </div>

      <Separator />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? TEXTS.buttons.submitting : TEXTS.buttons.submit}
      </Button>

      <Button type="button" variant="ghost" className="w-full text-blue-400 hover:text-blue-300" asChild>
        <Link href={ROUTES.AUTH.REGISTER}>{TEXTS.buttons.register}</Link>
      </Button>

      <Button type="button" variant="outline" className="w-full text-gray-300 hover:text-white" asChild>
        <Link href={ROUTES.HELP.CONTACT}>{TEXTS.buttons.help}</Link>
      </Button>
      <p className="text-xs text-center text-gray-500 mt-3">{TEXTS.footer.message}</p>
    </form>
  );
};
