import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

export default function AlertBanner({
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
        "flex gap-brand-md rounded-brand-lg border-1 border-l-4 border-star bg-popover p-brand-lg",
        variant === "stretch" && variants.stretch,
        variant === "default" && variants.default
      )}
    >
      <CircleAlert className="text-star" />
      <div className="w-full flex flex-col">{children}</div>
    </div>
  );
}
