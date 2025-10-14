import { HOW_IT_WORKS_ITEMS } from "@/utils/consts/howItWorksItems";
import { Card } from "../ui/card";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-brand-2xl px-brand-3xl py-brand-2xl">
      <div className="flex flex-col items-center gap-brand-md">
        <h2 className="heading-2">¿Cómo Funciona?</h2>
        <p className="paragraph-regular text-muted-foreground">
          Sigue estos simples pasos para obtener la financiación que necesitas.
        </p>
      </div>
      <div className="w-full flex justify-center gap-brand-xl">
        {HOW_IT_WORKS_ITEMS.map((item) => (
          <Card className="flex flex-col items-center w-[416px]" key={item.title}>
            <div className="flex items-center justify-center bg-background rounded-full h-[40px] w-[40px] paragraph-regular">
              {item.step}
            </div>
            <div className="flex flex-col gap-brand-sm">
              <h1 className="heading-4 text-center">{item.title}</h1>
              <p className="paragraph-small text-muted-foreground text-center">{item.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
