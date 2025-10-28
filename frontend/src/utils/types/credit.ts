import { Company } from "./company";

export interface Credit {
  id: number;
  company: Company;
  requestedAmmount: number;
  requestDate: string;
  status: CreditStatus;
}

export type CreditStatus = "NEW" | "PENDING" | "APPROVED" | "REJECTED" | "CANCELED" | "REVIEW";

export interface CreditCountCard {
  icon: React.JSX.Element;
  status: CreditStatus | "ALL";
  label: string;
  count: number;
}

export type UserCredit = Omit<Credit, "company">;
