"use client";

import NavBarLogo from "@/components/atoms/NavBarLogo";
import SidebarActiveLink from "@/components/atoms/SidebarActiveLink";
import { useGlobalContext } from "@/store/globalContext";
import { sideBarAdminItems } from "@/utils/consts/sideBarAdminItems";
import { sideBarUserItems } from "@/utils/consts/sideBarUserItems";

export default function SideBar() {
  const {
    state: { loggedUser },
  } = useGlobalContext();

  return (
    <div className="flex flex-col gap-[55px] p-brand-lg border-r-1 border-border-input">
      <div className="flex items-center gap-brand-md">
        <NavBarLogo />
        <h4 className="heading-4 whitespace-nowrap">Fintech Pyme</h4>
      </div>

      <div className="flex flex-col gap-brand-md">
        {loggedUser?.role === "USER" &&
          sideBarUserItems.map((item, i) => (
            <SidebarActiveLink key={i} href={item.href}>
              {item.icon}
              <p className="paragraph-small-medium">{item.text}</p>
            </SidebarActiveLink>
          ))}
        {loggedUser?.role === "ADMIN" &&
          sideBarAdminItems.map((item, i) => (
            <SidebarActiveLink key={i} href={item.href}>
              {item.icon}
              <p className="paragraph-small-medium">{item.text}</p>
            </SidebarActiveLink>
          ))}
      </div>
    </div>
  );
}
