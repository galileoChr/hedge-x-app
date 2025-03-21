"use client"

import { useAccount } from 'wagmi'
import { Card } from "@/components/ui/card"
import { ConnectWallet } from "@/components/connect-wallet"
import { FlashLoanForm } from "@/components/dashboard/flash-loan-form"
import { SimulationResult } from "@/components/dashboard/simulation-result"
import { useState } from "react"

export default function SimulationPage() {
  const { isConnected } = useAccount()
  const [simulationResult, setSimulationResult] = useState(null)

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center space-y-4">
          <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
          <p className="text-muted-foreground">
            Please connect your wallet to access the simulation mode.
          </p>
          <ConnectWallet />
        </Card>
      </div>
    )
  }

  const handleSimulate = (data) => {
    setSimulationResult({
      token: data.token,
      amount: data.amount,
      expectedProfit: "0.038",
      gasCost: "0.0042",
      slippage: "0.15",
      executionTime: "15",
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Advanced Simulation Mode</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FlashLoanForm onSimulate={handleSimulate} onExecute={() => {}} />
        <SimulationResult result={simulationResult} />
      </div>
    </div>
  )
}