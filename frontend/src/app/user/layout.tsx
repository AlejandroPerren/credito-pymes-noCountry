import HeaderBar from "@/components/organism/HeaderBar";
import SideBar from "@/components/organism/SideBar";
import { UserContextProvider } from "@/store/userContext";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserContextProvider>
      <div className="flex h-screen">
        <SideBar />
        <div className="h-full w-full overflow-y-hidden">
          <HeaderBar />
          {children}
        </div>
      </div>
    </UserContextProvider>
  );
}
