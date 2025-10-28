"use client";

import NewUserDashboard from "@/components/organism/NewUserDashboard";
import OldUserDashboard from "@/components/organism/OldUserDashboard";
import { useUserContext } from "@/store/userContext";

export default function UserDashboardPage() {
  const {
    state: { credits },
  } = useUserContext();

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {credits.length === 0 && <NewUserDashboard />}
      {credits.length > 0 && <OldUserDashboard />}
    </div>
  );
}
