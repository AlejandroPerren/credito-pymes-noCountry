"use client";

export default function UserProfileInfo() {
  return (
    <div className="flex flex-col gap-brand-lg rounded-brand-lg bg-popover p-brand-lg">
      <div className="flex flex-col gap-brand-md">
        <h3 className="heading-3">Información personal</h3>
        <p className="text-muted-foreground">Estos datos no se pueden modificar, contáctese con un operador.</p>
      </div>
      <div className="flex flex-col gap-brand-md">
        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Nombre completo</p>
            <p className="paragraph-small-medium">Juan Rodriguez</p>
          </div>
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">DNI</p>
            <p className="paragraph-small-medium">12345678</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Correo electrónico</p>
            <p className="paragraph-small-medium">juanrod@mail.com</p>
          </div>
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Teléfono</p>
            <p className="paragraph-small-medium">11 1234 1234</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-brand-md">
          <div className="flex flex-col gap-brand-sm">
            <p className="paragraph-small-medium text-placeholder-text">Teléfono</p>
            <p className="paragraph-small-medium">********</p>
          </div>
        </div>
      </div>
    </div>
  );
}
