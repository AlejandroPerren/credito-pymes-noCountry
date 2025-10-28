import SuccessBanner from "../ui/success-banner";

export default function UserCreditApprovedBanner({ amount }: { amount: number }) {
  return (
    <SuccessBanner variant="stretch">
      <p>¡Tu crédito ha sido aprobado!</p>
      <p className="paragraph-small text-muted-foreground">
        Los fondos por un monto de ${amount} han sido transferidos a tu CBU y se acreditarán en las próximas 24 horas
        hábiles.
      </p>
    </SuccessBanner>
  );
}
