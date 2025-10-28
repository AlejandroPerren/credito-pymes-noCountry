import FailureBanner from "../ui/failure-banner";

export default function UserCreditDetailsRejectedBanner({ note }: { note?: string }) {
  return (
    <FailureBanner variant="stretch" size="large">
      <p>Tu solicitud no ha sido aprobada en esta ocasión</p>
      <p className="paragraph-small text-muted-foreground">
        Después de analizar tu perfil, no podemos ofrecerte financiación en este momento. A continuación, te detallamos
        el motivo principal:
      </p>
      {note ? (
        <div className="flex items-center gap-brand-sm">
          <span className="paragraph-medium">Motivo del analista:</span>
          <p className="paragraph-small text-muted-foreground">{note}</p>
        </div>
      ) : (
        <p className="paragraph-medium">Sin motivo especificado</p>
      )}
    </FailureBanner>
  );
}
