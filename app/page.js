"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Wallet2, LineChart, Zap } from "lucide-react"
import Link from "next/link"
import { ConnectWallet } from "@/components/connect-wallet"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">HedgeTradeX</span>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Advanced Flash Loan
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {" "}Arbitrage Platform
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Execute profitable arbitrage trades across DEXs using flash loans. Real-time monitoring, advanced strategies, and seamless execution.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <ConnectWallet />
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 backdrop-blur-sm bg-card/50 border-border/50">
              <Wallet2 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Flash Loan Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly execute flash loans through Aave protocol with built-in safety checks and optimal routing.
              </p>
            </Card>
            <Card className="p-8 space-y-4 backdrop-blur-sm bg-card/50 border-border/50">
              <LineChart className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Monitor profits, gas costs, and trade performance with advanced charting and analytics tools.
              </p>
            </Card>
            <Card className="p-8 space-y-4 backdrop-blur-sm bg-card/50 border-border/50">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Smart Execution</h3>
              <p className="text-muted-foreground">
                Automated strategy execution with real-time price monitoring and gas optimization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center text-sm text-muted-foreground">
            © 2025 Christophe Manzi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}