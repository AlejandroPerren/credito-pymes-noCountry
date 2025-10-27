import { FolderOpen, LayoutDashboard } from "lucide-react";

export const sideBarUserItems = [
  {
    href: "/dashboard",
    icon: <LayoutDashboard size={16} />,
    text: "Dashboard",
  },
  {
    href: "/solicitudes",
    icon: <FolderOpen size={16} />,
    text: "Solicitudes",
  },
  // {
  //   href: "/configuracion",
  //   icon: <Bolt size={16} />,
  //   text: "Configuración",
  // },
];
