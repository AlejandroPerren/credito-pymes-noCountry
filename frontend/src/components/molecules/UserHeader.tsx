"use client";

import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Image from "next/image";
import { LoggedUser } from "@/utils/types/loggedUser";

const mockedLoggedUser: LoggedUser = { username: "User", avatar: "", role: "admin" };

export default function UserHeader() {
  const [user] = useState<LoggedUser>(mockedLoggedUser);

  return (
    <div className="flex gap-brand-md">
      <Button variant="ghost">
        <Bell />
      </Button>
      <div className="flex items-center justify-center gap-brand-sm">
        {user.avatar ? (
          <div className="relative w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden">
            <Image src={user.avatar} alt={`${user.username} avatar image`} fill />
          </div>
        ) : (
          <div className="w-10 aspect-square flex items-center justify-center rounded-full bg-popover">
            {user.username.slice(0, 2).toUpperCase()}
          </div>
        )}
        <p>{user.username}</p>
      </div>
    </div>
  );
}
