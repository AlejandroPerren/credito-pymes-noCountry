import { FileText, FilePlus, FileClock, FilePen, FileCheck, FileX } from "lucide-react";

export const solicitudesCounts = [
  {
    icon: <FileText />,
    label: "Total",
    count: 0,
  },
  {
    icon: <FilePlus />,
    label: "Nuevas",
    count: 0,
  },
  {
    icon: <FileClock />,
    label: "En revisión",
    count: 0,
  },
  {
    icon: <FilePen />,
    label: "Requieren acción",
    count: 0,
  },
  {
    icon: <FileCheck />,
    label: "Aprobadas",
    count: 0,
  },
  {
    icon: <FileX />,
    label: "Rechazadas",
    count: 0,
  },
];
