import VerifyIdentityBanner from "@/components/molecules/VerifyIdentityBanner";
import UserWelcome from "@/components/organism/UserWelcome";

export default function UserDashboardPage() {
  return (
    <div className="flex flex-col gap-brand-2xl p-brand-lg">
      <VerifyIdentityBanner />
      <UserWelcome />
    </div>
  );
}
