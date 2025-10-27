import { Credit } from "@/utils/types/credit";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import StatusLabel from "../atoms/StatusLabel";

export default function CreditCard({ credit }: { credit: Credit }) {
  return (
    <div className="grid grid-cols-[16px_repeat(6,1fr)] gap-brand-lg items-center rounded-brand-lg bg-popover p-brand-md">
      <Checkbox />
      <span className="paragraph-small">{credit.id}</span>
      <span className="paragraph-small">{credit.company}</span>
      <span className="paragraph-small">${credit.requestedAmmount}</span>
      <span className="paragraph-small">{credit.requestDate}</span>
      <div className="flex justify-start">
        <StatusLabel status={credit.status} />
      </div>
      <Button className="justify-start gap-">
        <Eye />
        <span className="w-full flex justify-center">Ver</span>
      </Button>
    </div>
  );
}
