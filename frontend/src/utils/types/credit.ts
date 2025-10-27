export interface Credit {
  id: number;
  company: string;
  requestedAmmount: number;
  requestDate: string;
  status: CreditStatus;
}

type CreditStatus = "NEW" | "PENDING" | "APPROVED" | "REJECTED" | "CANCELED";
