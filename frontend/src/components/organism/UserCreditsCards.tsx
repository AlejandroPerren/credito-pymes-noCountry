import { Credit } from "@/utils/types/credit";
import UserCreditCard from "../molecules/UserCreditCard";

export default function UserCreditsCards({ credits }: { credits: Credit[] }) {
  return (
    <div className="w-full flex flex-col gap-brand-md pb-20 overflow-auto">
      {credits.map((credit) => (
        <UserCreditCard key={credit.id} credit={credit} />
      ))}
    </div>
  );
}
