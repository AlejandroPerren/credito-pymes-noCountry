import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AuthCardProps {
  title: string
  children: React.ReactNode
}

export const AuthCard = ({ title, children }: AuthCardProps) => {
  return (
    <Card className="bg-card max-w-[400px] w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-center heading-3 font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
