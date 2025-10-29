"use client";

import { useGlobalContext } from "@/store/globalContext";

export default function UserAccount() {
  const {
    state: {
      loggedUser: { user, status },
    },
  } = useGlobalContext();

  if (status === "loading" || !user) return <div></div>;

  return (
    <div className="flex flex-col gap-brand-md">
      <h1 className="text-2xl font-bold">My Account</h1>
      <div className="flex flex-col gap-brand-sm">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}
