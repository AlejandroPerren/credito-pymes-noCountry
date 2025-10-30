"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiFetch } from "@/network/utils/FetchApi";
import { useModal } from "@/store/modalContext";

const companySchema = z.object({
  businessName: z.string(),
  taxId: z.string(),
  address: z.string(),
  phone: z.string().optional(),
  activity: z.string().optional(),
  incorporationDate: z.date().optional(),
  annualRevenue: z.number().optional(),
  userDni: z.string(),
});

const CreateCompanyForm = () => {
  const { dispatch: dispatchModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: z.infer<typeof companySchema>) => {
    const response = await apiFetch("/company", {
      method: "POST",
      body: {
        ...data,
        incorporationDate: data.incorporationDate ? new Date(data.incorporationDate).toISOString() : undefined,
      },
    });

    if (response.ok) {
      dispatchModal({ type: "CLOSE_MODAL" });
    } else {
      console.error("Company creation failed:", response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-brand-sm">
      <div className="flex flex-col">
        <Label htmlFor="businessName">Razón social</Label>
        <Input id="businessName" type="text" {...register("businessName")} />
        {errors.businessName && <p>{errors.businessName.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="taxId">CUIT / CUIL</Label>
        <Input id="taxId" type="text" {...register("taxId")} />
        {errors.taxId && <p>{errors.taxId.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="address">Domicilio Fiscal</Label>
        <Input id="address" type="text" {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="text" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="activity">Actividad Económica</Label>
        <Input id="activity" type="text" {...register("activity")} />
        {errors.activity && <p>{errors.activity.message}</p>}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="incorporationDate">Fecha de Constitución</Label>
        <Input id="incorporationDate" type="date" {...register("incorporationDate", { valueAsDate: true })} />
        {errors.incorporationDate && <p>{errors.incorporationDate.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="annualRevenue">Ingresos Anuales</Label>
        <Input id="annualRevenue" type="number" {...register("annualRevenue", { valueAsNumber: true })} />
        {errors.annualRevenue && <p>{errors.annualRevenue.message}</p>}
      </div>

      <div className="flex flex-col">
        <Label htmlFor="userDni">DNI de Usuario</Label>
        <Input id="userDni" type="text" {...register("userDni")} />
        {errors.userDni && <p>{errors.userDni.message}</p>}
      </div>

      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default CreateCompanyForm;
