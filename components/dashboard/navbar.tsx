"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ConnectWallet } from "@/components/connect-wallet"
import { Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const MENU_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Trade History", href: "/dashboard/history" },
  { label: "Simulation Mode", href: "/dashboard/simulation" },
  { label: "Settings", href: "/dashboard/settings" },
  { label: "Docs", href: "/docs" },
]

export function DashboardNavbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-sm bg-black/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">HedgeTradeX</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ConnectWallet />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </nav>
  )
}