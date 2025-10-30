import Image from "next/image";
import { Card } from "../ui/card";
import { Star } from "lucide-react";

export default function TestimonialsCard({ client }: { client: TestimonialClient }) {
  const stars = Array.from({ length: client.stars }, (_, i) => <Star key={i} size={16} className="text-star" />);

  return (
    <Card className="w-[387px]">
      <div className="flex items-center gap-brand-sm">
        <div className="flex rounded-full overflow-hidden">
          <Image src={client.avatar} alt={`${client.name} avatar`} width={40} height={40} />
        </div>
        <span className="paragraph-medium">{client.name}</span>
        <div className="flex gap-1">{stars}</div>
      </div>
      <p>{client.text}</p>
    </Card>
  );
}
