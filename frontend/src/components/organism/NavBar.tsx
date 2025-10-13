"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { PRIVATE_NAV_ITEMS, PUBLIC_NAV_ITEMS } from "@/utils/consts/navLinks";
import { Bell, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavBarLogo from "../atoms/NavBarLogo";

export default function NavBar() {
  const [isLoggedIn] = useState(false);

  return (
    <nav className="flex items-center px-brand-3xl py-brand-md">
      <div className={cn("flex gap-3", isLoggedIn ? "shrink-0" : "w-full")}>
        <NavBarLogo />
        <div className="flex items-center px-brand-sm">
          <legend className="heading-4">Fintech Pyme</legend>
        </div>
      </div>

      {isLoggedIn && (
        <div className="w-full flex gap-brand-lg pl-brand-3xl">
          {PRIVATE_NAV_ITEMS.map((item) => (
            <Button size="sm" variant="ghost" key={item.label} asChild>
              <Link href={item.link}>{item.label}</Link>
            </Button>
          ))}
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex px-brand-lg gap-brand-lg">
          {PUBLIC_NAV_ITEMS.map((item) => (
            <Button size="lg" key={item.label} variant="ghost" asChild>
              <Link href={item.link}>{item.label}</Link>
            </Button>
          ))}
        </div>
      )}

      {isLoggedIn && (
        <div className="flex gap-brand-lg h-10 items-center">
          <div className="h-full aspect-square flex items-center justify-center">
            <Bell width="20px" height="20px" />
          </div>
          <div className="flex gap-2 items-center">
            <LoaderCircle width="24px" height="24px" />
            <label className="paragraph">Label</label>
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex gap-brand-lg">
          <Button size="lg" variant="outline">
            Label
          </Button>
          <Button size="lg">Label</Button>
        </div>
      )}
    </nav>
  );
}
