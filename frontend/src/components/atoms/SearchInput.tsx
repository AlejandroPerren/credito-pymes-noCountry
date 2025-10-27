import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <form className="relative w-full">
      <Input placeholder="Buscar por ID o nombre de la empresa..." className="pl-8" />
      <div className="aspect-square absolute top-0 left-0 bottom-0 flex justify-center items-center">
        <Search className="text-muted-foreground" size={15} />
      </div>
    </form>
  );
}
