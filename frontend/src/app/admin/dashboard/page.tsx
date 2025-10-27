"use client";

import { useGlobalContext } from "@/store/globalContext";

export default function DashboardPage() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div>
      <div>Dashboard</div>
      <h1>{state.loggedUser?.username}</h1>
    </div>
  );
}
