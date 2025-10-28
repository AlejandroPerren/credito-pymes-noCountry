import { Company } from "./company";

export interface Credit {
  id: number;
  company: Company;
  requestedAmount: number;
  requestDate: string;
  status: CreditStatus;
  note?: string;
}

export type CreditStatus = "NEW" | "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "REVIEW";

export interface CreditCountCard {
  icon: React.JSX.Element;
  status: CreditStatus | "ALL";
  label: string;
  count: number;
}
