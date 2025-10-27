import HeaderBar from "@/components/organism/HeaderBar";
import SideBar from "@/components/organism/SideBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="w-full">
        <HeaderBar />
        {children}
      </div>
    </div>
  );
}
