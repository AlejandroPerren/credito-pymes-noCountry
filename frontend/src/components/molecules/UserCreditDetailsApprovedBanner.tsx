import SuccessBanner from "../ui/success-banner";

export default function UserCreditDetailsApprovedBanner({ amount }: { amount: number }) {
  return (
    <SuccessBanner variant="stretch" size="large">
      <p>¡Tu crédito de ${amount.toLocaleString("es-ar")} ha sido aprobado!</p>
      <p className="paragraph-small text-muted-foreground">
        Hemos iniciado la transferencia a la cuenta CBU que nos proporcionaste. Verás los fondos reflejados en tu cuenta
        en las próximas 24 horas hábiles.
      </p>
    </SuccessBanner>
  );
}
