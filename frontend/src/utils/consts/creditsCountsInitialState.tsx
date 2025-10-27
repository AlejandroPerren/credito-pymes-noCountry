import { FileText, FilePlus, FileClock, FilePen, FileCheck, FileX } from "lucide-react";
import { CreditCountCard } from "../types/credit";

export const creditsCountsInitialState: CreditCountCard[] = [
  {
    icon: <FileText />,
    status: "ALL",
    label: "Total",
    count: 0,
  },
  {
    icon: <FilePlus />,
    status: "NEW",
    label: "Nuevas",
    count: 0,
  },
  {
    icon: <FileClock />,
    status: "PENDING",
    label: "En revisión",
    count: 0,
  },
  {
    icon: <FilePen />,
    status: "REVIEW",
    label: "Requieren acción",
    count: 0,
  },
  {
    icon: <FileCheck />,
    status: "APPROVED",
    label: "Aprobadas",
    count: 0,
  },
  {
    icon: <FileX />,
    status: "REJECTED",
    label: "Rechazadas",
    count: 0,
  },
];
