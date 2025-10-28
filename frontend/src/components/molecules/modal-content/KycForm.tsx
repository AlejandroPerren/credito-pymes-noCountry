"use client";
import { useSection } from "@/store/sectionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiFetch } from "@/network/utils/FetchApi";

const kycSchema = z.object({
  creditId: z.number(),
  riskLevel: z.string(),
  pep: z.boolean(),
});

const KycForm = () => {
  const { dispatch } = useSection();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(kycSchema),
  });

  const onSubmit = async (data: z.infer<typeof kycSchema>) => {
    const response = await apiFetch("/kyc-aml-verification", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      dispatch({ type: "SET_KYC_DATA", payload: response.data });
      dispatch({ type: "SET_SECTION", payload: "signature" });
    } else {
      console.error("KYC failed:", response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="creditId">Credit ID</Label>
      <Input id="creditId" type="number" {...register("creditId", { valueAsNumber: true })} />
      {errors.creditId && <p>{errors.creditId.message}</p>}
      <Label htmlFor="riskLevel">Risk Level</Label>
      <Input id="riskLevel" type="text" {...register("riskLevel")} />
      {errors.riskLevel && <p>{errors.riskLevel.message}</p>}
      <div className="flex items-center space-x-2">
        <Checkbox id="pep" {...register("pep")} />
        <label
          htmlFor="pep"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          PEP
        </label>
      </div>
      {errors.pep && <p>{errors.pep.message}</p>}
      <Button type="submit">Next</Button>
    </form>
  );
};

export default KycForm;
