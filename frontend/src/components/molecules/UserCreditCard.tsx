import { Credit } from "@/utils/types/credit";
import StatusLabel from "../atoms/StatusLabel";
import UserCreditReviewBanner from "./UserCreditReviewBanner";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UserCreditCard({ credit }: { credit: Credit }) {
  return (
    <div className="flex flex-col gap-brand-md rounded-brand-lg bg-popover p-brand-xl">
      <div className="flex items-center gap-brand-md">
        <h4 className="paragraph-medium whitespace-nowrap">{credit.company.businessName}</h4>
        <div className="w-full flex items-center justify-end gap-brand-md">
          <p className="monospaced">{credit.id}</p>
          <StatusLabel status={credit.status} />
        </div>
      </div>

      <div className="flex gap-brand-md items-center">
        <p className="paragraph-small text-muted-foreground">Monto solicitado ${credit.requestedAmmount.toFixed(2)}</p>
        <div className="w-2 h-2 rounded-full bg-border-input"></div>
        <p className="paragraph-small text-muted-foreground">Creada el {credit.requestDate}</p>
      </div>

      {credit.status === "REVIEW" && <UserCreditReviewBanner />}

      <div>
        <Button variant="secondary" size="lg" asChild>
          <Link href={`/user/solicitudes/${credit.id}`}>Ver detalles</Link>
        </Button>
      </div>
    </div>
  );
}
