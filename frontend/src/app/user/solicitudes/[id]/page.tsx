import CreditUserDetailsHeader from "@/components/molecules/CreditUserDetailsHeader";
import UserCreditDetailsCompany from "@/components/organism/UserCreditDetailsCompany";

export default async function UserCreditDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-brand-2xl p-brand-lg">
      <CreditUserDetailsHeader id={+id} />

      <div className="flex flex-col gap-brand-lg">
        <UserCreditDetailsCompany id={+id} />
        <div className="flex flex-col rounded-brand-lg bg-popover p-brand-lg"></div>
      </div>
    </div>
  );
}
