import HeaderBar from "@/components/organism/HeaderBar";
import SideBar from "@/components/organism/SideBar";
import { AdminContextProvider } from "@/store/adminContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminContextProvider>
      <div className="flex h-screen">
        <SideBar />
        <div className="h-full w-full overflow-y-hidden">
          <HeaderBar />
          {children}
        </div>
      </div>
    </AdminContextProvider>
  );
}
