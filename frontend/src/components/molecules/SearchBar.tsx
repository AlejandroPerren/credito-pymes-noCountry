import { ListFilter } from "lucide-react";
import SearchInput from "../atoms/SearchInput";
import { Button } from "../ui/button";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center gap-brand-sm">
      <SearchInput />
      <Button variant="ghost">
        <ListFilter />
      </Button>
    </div>
  );
}
