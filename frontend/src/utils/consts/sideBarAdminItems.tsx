import { FolderOpen, LayoutDashboard, Users } from "lucide-react";

export const sideBarAdminItems = [
  {
    href: "/admin/dashboard",
    icon: <LayoutDashboard size={16} />,
    text: "Dashboard",
  },
  {
    href: "/admin/solicitudes",
    icon: <FolderOpen size={16} />,
    text: "Solicitudes",
  },
  {
    href: "/admin/operadores",
    icon: <Users size={16} />,
    text: "Operadores",
  },
];
