import NavBar from "@/components/organism/NavBar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
