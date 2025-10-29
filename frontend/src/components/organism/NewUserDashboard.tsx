"use client";

import UserNeeds from "@/components/organism/UserNeeds";
import UserWelcome from "@/components/organism/UserWelcome";
import { apiFetch } from "@/network/utils/FetchApi";
import { useEffect, useState } from "react";
import CreateCompanyBanner from "../molecules/CreateCompanyBanner";

export default function NewUserDashboard() {
  const [hasCompany, setHasCompany] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await apiFetch("/company");
      if (response.ok && Array.isArray(response.data) && response.data.length === 0) {
        console.log(response.data);
        setHasCompany(false);
      }
    };

    fetchCompany();
  }, []);

  return (
    <div className="flex flex-col gap-brand-2xl p-brand-lg">
      {!hasCompany && <CreateCompanyBanner />}
      <UserWelcome variant="new" />
      <UserNeeds />
    </div>
  );
}
