"use client";

import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TEXTS_VERIFICATION } from "@/utils/consts/register";
import { ROUTES } from "@/utils/config/routesApp/routes";

export const AuthEmailVerification = () => {
  return (
    <Card className="w-full max-w-[400px] mx-auto text-center shadow-lg border-none text-gray-100">
      <CardHeader>
        <div className="flex justify-center mb-3">
          <div className="bg-blue-500/10 p-3 rounded-full">
            <Mail className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <CardTitle className="heading-3 font-semibold text-white">
          {TEXTS_VERIFICATION.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="paragraph-regular tracking-normal text-gray-300">
          {TEXTS_VERIFICATION.description}
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{TEXTS_VERIFICATION.note}</span>
        </div>

        <div className="space-y-2">
          <Button className="w-full transition-colors">
            {TEXTS_VERIFICATION.buttons.resend}
          </Button>

          <Button
            variant="ghost"
            className="w-full text-blue-400 hover:text-blue-300"
            asChild
          >
            <Link href={ROUTES.AUTH.LOGIN}>
              {TEXTS_VERIFICATION.buttons.backToLogin}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
