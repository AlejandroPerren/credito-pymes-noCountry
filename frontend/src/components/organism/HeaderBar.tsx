import SearchBar from "../molecules/SearchBar";
import UserHeader from "../molecules/UserHeader";

export default function HeaderBar() {
  return (
    <div className="w-full flex items-center gap-brand-xl px-brand-lg py-brand-md">
      <SearchBar />
      <UserHeader />
    </div>
  );
}
