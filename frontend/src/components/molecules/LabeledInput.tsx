import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
interface LabeledInputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  register?: any;
  error?: string;
}

export const LabeledInput = ({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
}: LabeledInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        className={cn(
          "bg-background border-gray-700 max-h-none h-10 px-4 py-2.5",
          error && "border-red-500"
        )}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};
