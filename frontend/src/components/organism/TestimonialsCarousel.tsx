"use client";

import { TESTIMONIALS_ITEMS } from "@/utils/consts/testimonialsItems";
import TestimonialsCard from "../molecules/TestimonialsCard";

export default function TestimonialsCarousel() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max gap-brand-lg p-brand-lg">
        {[...TESTIMONIALS_ITEMS].map((item, i) => (
          <TestimonialsCard key={i} client={item} />
        ))}
      </div>
    </div>
  );
}
