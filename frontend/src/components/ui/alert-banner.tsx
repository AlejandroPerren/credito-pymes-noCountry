import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

export default function AlertBanner({
  children,
  variant = "default",
  size = "default",
}: {
  children: React.ReactNode;
  variant?: "stretch" | "default";
  size?: "default" | "large";
}) {
  const variants = {
    default: "w-[80%] m-auto",
    stretch: "w-full",
  };

  const sizes = {
    default: "p-brand-lg",
    large: "p-brand-xl",
  };

  return (
    <div
      className={cn(
        "flex gap-brand-md rounded-brand-lg border-1 border-l-4 border-star bg-popover",
        variant === "stretch" && variants.stretch,
        variant === "default" && variants.default,
        size === "large" && sizes.large,
        size === "default" && sizes.default
      )}
    >
      <CircleAlert className="text-star" />
      <div className="w-full flex flex-col gap-brand-sm">{children}</div>
    </div>
  );
}
