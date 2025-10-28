"use client";

import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGlobalContext } from "@/store/globalContext";
import { useRouter } from "next/navigation";

export default function UserHeader() {
  const router = useRouter();
  const {
    state: { loggedUser },
  } = useGlobalContext();

  if (loggedUser === null) {
    router.push("/");
    return <div></div>;
  }

  return (
    <div className="flex gap-brand-md">
      <Button variant="ghost">
        <Bell />
      </Button>
      <div className="flex items-center justify-center gap-brand-sm">
        {loggedUser.avatar ? (
          <div className="relative w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden">
            <Image src={loggedUser.avatar} alt={`${loggedUser.username} avatar image`} fill />
          </div>
        ) : (
          <div className="w-10 aspect-square flex items-center justify-center rounded-full bg-popover">
            {loggedUser.username.slice(0, 2).toUpperCase()}
          </div>
        )}
        <p className="whitespace-nowrap">{loggedUser.username}</p>
      </div>
    </div>
  );
}
