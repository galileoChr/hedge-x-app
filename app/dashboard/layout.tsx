import { DashboardNavbar } from "@/components/dashboard/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <DashboardNavbar />
      <main>{children}</main>
    </div>
  )
}