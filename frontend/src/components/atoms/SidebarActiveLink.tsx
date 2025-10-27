"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarActiveLink({ children, href }: { children: React.ReactNode; href: string }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-brand-md px-brand-lg py-brand-sm transition",
        path === href ? "bg-popover" : ""
      )}
    >
      {children}
    </Link>
  );
}
