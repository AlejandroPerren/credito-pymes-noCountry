"use client";

import { TESTIMONIALS_ITEMS } from "@/utils/consts/testimonialsItems";
import TestimonialsCard from "../molecules/TestimonialsCard";
import { motion } from "motion/react";

export default function TestimonialsCarousel() {
  return (
    <motion.div
      className="flex w-max gap-brand-lg p-brand-lg"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0 }}
    >
      {[...TESTIMONIALS_ITEMS, ...TESTIMONIALS_ITEMS].map((item, i) => (
        <TestimonialsCard key={i} client={item} />
      ))}
    </motion.div>
  );
}
