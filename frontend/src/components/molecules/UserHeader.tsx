"use client";

import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGlobalContext } from "@/store/globalContext";
import { useEffect, useRef, useState } from "react";
import ProfilePanel from "./ProfilePanel";
import { AnimatePresence } from "motion/react";

export default function UserHeader() {
  const {
    state: {
      loggedUser: { user, status },
    },
  } = useGlobalContext();
  const [panelVisibility, setPanelVisibility] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (panelRef.current) {
        if (!panelRef.current.contains(e.target as Node)) {
          setPanelVisibility(false);
        }
      }
    }

    addEventListener("click", clickOutside);

    return () => {
      removeEventListener("click", clickOutside);
    };
  }, []);

  if (status === "loading" || !user) return <div></div>;

  return (
    <div className="flex gap-brand-md">
      <Button variant="ghost">
        <Bell />
      </Button>

      <div className="relative" ref={panelRef}>
        <button
          className="flex items-center justify-center gap-brand-sm cursor-pointer"
          onClick={() => setPanelVisibility(true)}
        >
          {user.avatar ? (
            <div className="relative w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden">
              <Image src={user.avatar} alt={`${user.username} avatar image`} fill />
            </div>
          ) : (
            <div className="w-10 aspect-square flex items-center justify-center rounded-full bg-popover">
              {user.username.slice(0, 2).toUpperCase()}
            </div>
          )}
          <p className="whitespace-nowrap">{user.username}</p>
        </button>

        <AnimatePresence>{panelVisibility && <ProfilePanel setVisibility={setPanelVisibility} />}</AnimatePresence>
      </div>
    </div>
  );
}
