import FailureBanner from "../ui/failure-banner";

export default function UserCreditRejectedBanner() {
  return (
    <FailureBanner variant="stretch">
      <p>Tu solicitud no ha sido aprobada en esta ocasión</p>
      <p className="paragraph-small text-muted-foreground">
        Después de analizar tu perfil, no podemos ofrecerte financiación en este momento. A continuación, te detallamos
        el motivo principal.
      </p>
    </FailureBanner>
  );
}
