import SideBar from "@/components/organism/SideBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
