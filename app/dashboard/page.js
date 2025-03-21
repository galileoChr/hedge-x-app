"use client"

import { useAccount } from 'wagmi'
import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/connect-wallet"
import { Card } from "@/components/ui/card"

export default function Dashboard() {
  const { isConnected } = useAccount()

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

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  )
}