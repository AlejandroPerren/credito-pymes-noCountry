import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-brand-2xl py-brand-3xl">
      <div className="flex flex-col gap-brand-lg">
        <h2 className="heading-2 text-center">Lo que dicen nuestros clientes</h2>
        <p className="paragraph-regular text-center">Historias de éxito de empresas como la tuya.</p>
      </div>
      <TestimonialsCarousel />
    </div>
  );
}
