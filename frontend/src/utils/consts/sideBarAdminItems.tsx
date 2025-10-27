import { FolderOpen, LayoutDashboard } from "lucide-react";

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
  // {
  //   href: "/admin/configuracion",
  //   icon: <Bolt size={16} />,
  //   text: "Configuración",
  // },
];
