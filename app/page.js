"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Wallet2, LineChart, Zap, BarChart3, Shield, Layers } from "lucide-react"
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
            Next-Gen
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {" "}Decentralized Banking
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Trade like an institution without institutional capital. Our cutting-edge DeFi protocol enables dynamic arbitrage and value extraction through real-time market execution.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <ConnectWallet />
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">
                Access Platform
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
              <BarChart3 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Institutional-Grade Execution</h3>
              <p className="text-muted-foreground">
                Access sophisticated trading strategies previously reserved for institutional players, without capital requirements or pre-funding.
              </p>
            </Card>
            <Card className="p-8 space-y-4 backdrop-blur-sm bg-card/50 border-border/50">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Risk-Managed Infrastructure</h3>
              <p className="text-muted-foreground">
                Built-in risk management systems with real-time monitoring, automated safety checks, and instant execution capabilities.
              </p>
            </Card>
            <Card className="p-8 space-y-4 backdrop-blur-sm bg-card/50 border-border/50">
              <Layers className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">DeFi-Native Architecture</h3>
              <p className="text-muted-foreground">
                Leverage the power of decentralized infrastructure for transparent, efficient, and automated value extraction across markets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Redefining Financial Systems</h2>
              <p className="text-lg text-muted-foreground">
                HedgeTradeX combines the efficiency of high-frequency trading with the transparency and composability of decentralized finance. Our protocol enables users to operate like institutions, without requiring institutional-level resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instant Liquidity</h4>
                    <p className="text-muted-foreground">Access capital without pre-funding or collateral requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <LineChart className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-Time Optimization</h4>
                    <p className="text-muted-foreground">Advanced algorithms continuously monitor and execute optimal trades.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Wallet2 className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Automated Value Capture</h4>
                    <p className="text-muted-foreground">Systematic extraction of value from market inefficiencies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <Card className="p-8 space-y-6 bg-black/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold">Getting Started</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Wallet2 className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Connect Your Wallet</h4>
                      <p className="text-muted-foreground">Start by connecting your Web3 wallet to access the platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <LineChart className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Select Your Strategy</h4>
                      <p className="text-muted-foreground">Choose from our curated selection of trading strategies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-500/10 rounded-lg">
                      <Zap className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Execute Trades</h4>
                      <p className="text-muted-foreground">Let our automated system handle the execution for you.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
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