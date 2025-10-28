"use client";
import { useSection } from "@/store/sectionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiFetch } from "@/network/utils/FetchApi";
import { useModal } from "@/store/modalContext";

const signatureSchema = z.object({
  documentHash: z.string(),
  signedBy: z.string(),
});

const SignatureForm = () => {
  const { dispatch: dispatchModal } = useModal();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signatureSchema),
  });

  const onSubmit = async (data: z.infer<typeof signatureSchema>) => {
    const response = await apiFetch("/digital-signature", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      dispatchModal({ type: "CLOSE_MODAL" });
    } else {
      console.error("Signature failed:", response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="documentHash">Document Hash</Label>
      <Input id="documentHash" type="text" {...register("documentHash")} />
      {errors.documentHash && <p>{errors.documentHash.message}</p>}
      <Label htmlFor="signedBy">Signed By</Label>
      <Input id="signedBy" type="text" {...register("signedBy")} />
      {errors.signedBy && <p>{errors.signedBy.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignatureForm;
