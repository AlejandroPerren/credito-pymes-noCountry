import { FolderOpen, LayoutDashboard } from "lucide-react";

export const sideBarUserItems = [
  {
    href: "/user/dashboard",
    icon: <LayoutDashboard size={16} />,
    text: "Dashboard",
  },
  {
    href: "/user/solicitudes",
    icon: <FolderOpen size={16} />,
    text: "Solicitudes",
  },
  // {
  //   href: "/configuracion",
  //   icon: <Bolt size={16} />,
  //   text: "Configuración",
  // },
];
