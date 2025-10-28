import UserActiveCredits from "./UserActiveCredits";
import UserWelcome from "./UserWelcome";

export default function OldUserDashboard() {
  return (
    <div className="h-full flex flex-col gap-brand-2xl p-brand-lg overflow-hidden">
      <UserWelcome variant="old" />
      <UserActiveCredits />
    </div>
  );
}
