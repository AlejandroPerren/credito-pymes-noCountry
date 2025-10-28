import AlertBanner from "../ui/alert-banner";

export default function UserCreditReviewBanner() {
  return (
    <AlertBanner variant="stretch">
      <p>Información adicional requerida</p>
      <p className="paragraph-small text-muted-foreground">
        Por favor, revise los comentarios del operador y actualice su solicitud.
      </p>
    </AlertBanner>
  );
}
