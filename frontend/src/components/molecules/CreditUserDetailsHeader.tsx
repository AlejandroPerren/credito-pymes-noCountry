"use client";

import { notFound } from "next/navigation";
import StatusLabel from "../atoms/StatusLabel";
import { useUserContext } from "@/store/userContext";
import UserCreditDetailsReviewBanner from "./UserCreditDetailsReviewBanner";
import UserCreditDetailsApprovedBanner from "./UserCreditDetailsApprovedBanner";
import UserCreditDetailsRejectedBanner from "./UserCreditDetailsRejectedBanner";
import RouterBackBtn from "../atoms/RouterBackBtn";

export default function CreditUserDetailsHeader({ id }: { id: number }) {
  const { state } = useUserContext();

  const credit = state.credits.data.find((credit) => credit.id === id);

  if (!credit) return notFound();

  return (
    <div className="flex flex-col gap-brand-2xl">
      <div className="flex gap-brand-lg">
        <RouterBackBtn />

        <div className="flex gap-brand-md">
          <div className="flex flex-col gap-brand-md">
            <h4 className="heading-4">Solicitud de crédito {credit.id}</h4>
            <p className="paragraph-regular text-placeholder-text">{credit.company.businessName}</p>
          </div>
        </div>

        <StatusLabel status={credit.status} />
      </div>

      {credit.status === "REVIEW" && <UserCreditDetailsReviewBanner />}
      {credit.status === "APPROVED" && <UserCreditDetailsApprovedBanner amount={credit.requestedAmount} />}
      {credit.status === "REJECTED" && <UserCreditDetailsRejectedBanner note={credit.note} />}
    </div>
  );
}
