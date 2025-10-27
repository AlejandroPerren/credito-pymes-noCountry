import { cn } from "@/lib/utils";
import { CreditStatus } from "@/utils/types/credit";

export default function StatusLabel({ status }: { status: CreditStatus }) {
  function setStatus(status: CreditStatus): { text: string; color: string } {
    switch (status) {
      case "NEW":
        return { text: "Enviada", color: "bg-new-credit" };
      case "PENDING":
        return { text: "En revisión", color: "bg-pending-credit" };
      case "REVIEW":
        return { text: "Corregir", color: "bg-review-credit" };
      case "APPROVED":
        return { text: "Aprobada", color: "bg-approved-credit" };
      case "REJECTED":
        return { text: "Rechazada", color: "bg-rejected-credit" };
      default:
        return { text: "", color: "" };
    }
  }

  const label = setStatus(status);

  return (
    <div className={cn("h-8 flex items-center justify-center rounded-brand-md py-1 px-2", label.color)}>
      <h1 className="paragraph-small">{label.text}</h1>
    </div>
  );
}
