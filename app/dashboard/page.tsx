"use client"

import { useAccount } from 'wagmi'
import { Card } from "@/components/ui/card"
import { ConnectWallet } from "@/components/connect-wallet"
import { FlashLoanForm } from "@/components/dashboard/flash-loan-form"
import { SimulationResult } from "@/components/dashboard/simulation-result"
import { GasTracker } from "@/components/dashboard/gas-tracker"
import { TradeHistory } from "@/components/dashboard/trade-history"
import { useState } from "react"

export default function Dashboard() {
  const { isConnected } = useAccount()
  const [simulationResult, setSimulationResult] = useState(null)

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center space-y-4">
          <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
          <p className="text-muted-foreground">
            Please connect your wallet to access the dashboard and start trading.
          </p>
          <ConnectWallet />
        </Card>
      </div>
    )
  }

  const handleSimulate = (data) => {
    // Mock simulation result
    setSimulationResult({
      token: data.token,
      amount: data.amount,
      expectedProfit: "0.038",
      gasCost: "0.0042",
      slippage: "0.15",
      executionTime: "15",
    })
  }

  const handleExecute = (data) => {
    // Implementation for executing the trade
    console.log("Executing trade:", data)
  }

  return (
    <div className="min-h-screen p-6 space-y-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Flash Loan Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <FlashLoanForm
              onSimulate={handleSimulate}
              onExecute={handleExecute}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <SimulationResult result={simulationResult} />
            <GasTracker />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <TradeHistory />
        </div>
      </div>
    </div>
  )
}