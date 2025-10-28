import VerifyIdentityBanner from "@/components/molecules/VerifyIdentityBanner";
import UserNeeds from "@/components/organism/UserNeeds";
import UserWelcome from "@/components/organism/UserWelcome";

export default function NewUserDashboard() {
  return (
    <div className="flex flex-col gap-brand-2xl p-brand-lg">
      <VerifyIdentityBanner />
      <UserWelcome variant="new" />
      <UserNeeds />
    </div>
  );
}
