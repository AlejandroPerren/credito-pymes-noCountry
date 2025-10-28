import AlertBanner from "../ui/alert-banner";

export default function UserCreditDetailsReviewBanner() {
  return (
    <AlertBanner variant="stretch" size="large">
      <p>Tu solicitud necesita tu atención</p>
      <p className="paragraph-small text-muted-foreground">
        Nuestro equipo ha revisado tus documentos y necesita que corrijas algunos puntos para poder continuar con el
        análisis. Por favor, revisa los detalles a continuación.
      </p>
    </AlertBanner>
  );
}
