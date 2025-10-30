import CreateAccountBtn from "../atoms/CreateAccountBtn";

export default function CallToAction() {
  return (
    <div className="bg-popover p-brand-3xl">
      <div className="flex flex-col items-center gap-brand-xl">
        <div className="flex flex-col gap-brand-lg items-center">
          <h2 className="heading-2">¿Listo para impulsar tu PYME?</h2>
          <p className="paragraph-regular text-muted-foreground">
            Únete a miles de empresarios que ya confían en nosotros para hacer crecer sus negocios.
          </p>
        </div>
        <CreateAccountBtn>Crear Cuenta Gratis</CreateAccountBtn>
      </div>
    </div>
  );
}
