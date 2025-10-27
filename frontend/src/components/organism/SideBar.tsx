import NavBarLogo from "@/components/atoms/NavBarLogo";
import SidebarActiveLink from "@/components/atoms/SidebarActiveLink";
import { sideBarAdminItems } from "@/utils/consts/sideBarAdminItems";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-[55px] p-brand-lg border-r-1 border-border-input">
      <div className="flex items-center gap-brand-md">
        <NavBarLogo />
        <h4 className="heading-4">Fintech Pyme</h4>
      </div>

      <div className="flex flex-col gap-brand-md">
        {sideBarAdminItems.map((item, i) => (
          <SidebarActiveLink key={i} href={item.href}>
            {item.icon}
            <p className="paragraph-small-medium">{item.text}</p>
          </SidebarActiveLink>
        ))}
      </div>
    </div>
  );
}
