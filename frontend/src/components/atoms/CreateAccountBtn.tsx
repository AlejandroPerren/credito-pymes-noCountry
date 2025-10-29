import Link from "next/link";
import { Button } from "../ui/button";

export default function CreateAccountBtn({ children }: { children: React.ReactNode }) {
  return (
    <Button size="lg" asChild>
      <Link href="/register">{children}</Link>
    </Button>
  );
}
