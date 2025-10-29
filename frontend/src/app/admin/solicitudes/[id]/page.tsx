import CreditAdminDetailsCompany from "@/components/molecules/CreditAdminDetailsCompany";
import CreditAdminDetailsDocuments from "@/components/molecules/CreditAdminDetailsDocuments";
import CreditAdminDetailsHeader from "@/components/molecules/CreditAdminDetailsHeader";
import AdminCreditOperatorPanel from "@/components/organism/AdminCreditOperatorPanel";

export default async function CreditDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="flex flex-col p-brand-lg gap-brand-xl">
      <CreditAdminDetailsHeader id={+id} />

      <div className="flex gap-brand-lg">
        <div className="w-full flex flex-col gap-brand-lg">
          <CreditAdminDetailsCompany id={+id} />

          <CreditAdminDetailsDocuments />
        </div>
        <AdminCreditOperatorPanel id={+id} />
      </div>
    </div>
  );
}
