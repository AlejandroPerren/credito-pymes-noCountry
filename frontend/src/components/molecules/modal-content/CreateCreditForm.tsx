"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { apiFetch } from "@/network/utils/FetchApi";
import { useGlobalContext } from "@/store/globalContext";
import { useModal } from "@/store/modalContext";

const creditFormSchema = z.object({
  requestedAmount: z.string(),
  termMonths: z.string(),
  interestRate: z.string(),
  companyId: z.string(),
});

const kycAmlFormSchema = z.object({
  dni_front: z.string().url(),
  dni_back: z.string().url(),
  documentUrl: z.string().url(),
});

export default function CreateCreditForm() {
  const [step, setStep] = useState(1);
  const [creditId, setCreditId] = useState<number | null>(null);
  const { state: { loggedUser: { user } } } = useGlobalContext();
  const [companyId, setCompanyId] = useState<string | null>(null);

  const creditForm = useForm<z.infer<typeof creditFormSchema>>({
    resolver: zodResolver(creditFormSchema),
    defaultValues: {
      requestedAmount: "",
      termMonths: "",
      interestRate: "",
      companyId: companyId || "",
    },
  });

  const kycAmlForm = useForm<z.infer<typeof kycAmlFormSchema>>({
    resolver: zodResolver(kycAmlFormSchema),
    defaultValues: {
      dni_front: "https://www.ejemplo.com/dni_frente.jpg",
      dni_back: "https://www.ejemplo.com/dni_dorso.jpg",
      documentUrl: "https://www.ejemplo.com/firma.jpg",
    },
  });

  useEffect(() => {
    const storedCompanyId = localStorage.getItem("companyId");
    if (storedCompanyId) {
      setCompanyId(storedCompanyId);
      creditForm.reset({ companyId: storedCompanyId });
    } else {
      // Fetch company from DB
      const fetchCompany = async () => {
        const response = await apiFetch("/company");
        if (response.ok && Array.isArray(response.data) && response.data.length > 0) {
          const company = response.data[0];
          setCompanyId(company.id);
          localStorage.setItem("companyId", company.id);
          creditForm.reset({ companyId: company.id });
        }
      };
      fetchCompany();
    }
  }, [creditForm]);

  async function onCreditSubmit(values: z.infer<typeof creditFormSchema>) {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    console.log("Simulating credit creation with values:", values);

    // Simulate successful credit creation
    const randomCreditId = Math.floor(Math.random() * 1000);
    setCreditId(randomCreditId);
    setStep(2);
  }

  const { dispatch: dispatchModal } = useModal();

  async function onKycAmlSubmit(values: z.infer<typeof kycAmlFormSchema>) {
    console.log("Simulating KYC/AML and digital signature submission with values:", values);

    // Simulate successful submission
    dispatchModal({ type: "CLOSE_MODAL" });
  }

  return (
    <div className="w-full">
      {step === 1 && (
        <Form {...creditForm}>
          <form onSubmit={creditForm.handleSubmit(onCreditSubmit)} className="space-y-8">
            <FormField
              control={creditForm.control}
              name="requestedAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monto Solicitado</FormLabel>
                  <FormControl>
                    <Input placeholder="5000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={creditForm.control}
              name="termMonths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plazo (meses)</FormLabel>
                  <FormControl>
                    <Input placeholder="12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={creditForm.control}
              name="interestRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tasa de Interés</FormLabel>
                  <FormControl>
                    <Input placeholder="0.05" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={creditForm.control}
              name="companyId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID de la Compañía</FormLabel>
                  <FormControl>
                    <Input placeholder="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Siguiente</Button>
          </form>
        </Form>
      )}

      {step === 2 && (
        <Form {...kycAmlForm}>
          <form onSubmit={kycAmlForm.handleSubmit(onKycAmlSubmit)} className="space-y-8">
            <FormField
              control={kycAmlForm.control}
              name="dni_front"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL DNI Frente</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={kycAmlForm.control}
              name="dni_back"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL DNI Dorso</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={kycAmlForm.control}
              name="documentUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Firma Digital</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Finalizar Solicitud</Button>
          </form>
        </Form>
      )}
    </div>
  );
}