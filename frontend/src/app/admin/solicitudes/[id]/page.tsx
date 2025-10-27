import CreditAdminDetailsHeader from "@/components/molecules/CreditAdminDetailsHeader";

export default async function CreditDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="p-brand-lg">
      <CreditAdminDetailsHeader id={+id} />
    </div>
  );
}
