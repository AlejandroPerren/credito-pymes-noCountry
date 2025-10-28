import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

export default function SuccessBanner({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "stretch" | "default";
}) {
  const variants = {
    default: "w-[80%] m-auto",
    stretch: "w-full",
  };

  return (
    <div
      className={cn(
        "flex gap-brand-md rounded-brand-lg border-1 border-l-4 border-success bg-popover p-brand-lg",
        variant === "stretch" && variants.stretch,
        variant === "default" && variants.default
      )}
    >
      <CircleCheck className="text-success" />
      <div className="w-full flex flex-col">{children}</div>
    </div>
  );
}
