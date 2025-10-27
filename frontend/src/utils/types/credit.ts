export interface Credit {
  id: number;
  company: string;
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
