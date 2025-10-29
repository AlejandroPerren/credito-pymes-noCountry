"use client";

import { Bell, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGlobalContext } from "@/store/globalContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserHeader() {
  const {
    state: {
      loggedUser: { user, status },
    },
    logout,
  } = useGlobalContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (status === "loading" || !user) return <div></div>;

  return (
    <div className="flex gap-brand-md">
      <Button variant="ghost">
        <Bell />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center justify-center gap-brand-sm">
            {user.avatar ? (
              <div className="relative w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden">
                <Image
                  src={user.avatar}
                  alt={`${user.username} avatar image`}
                  fill
                />
              </div>
            ) : (
              <div className="w-10 aspect-square flex items-center justify-center rounded-full bg-popover">
                {user.username.slice(0, 2).toUpperCase()}
              </div>
            )}
            <p className="whitespace-nowrap">{user.username}</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/user/account" className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
