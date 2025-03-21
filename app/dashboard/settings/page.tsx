"use client"

import { useAccount } from 'wagmi'
import { Card } from "@/components/ui/card"
import { ConnectWallet } from "@/components/connect-wallet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center space-y-4">
          <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
          <p className="text-muted-foreground">
            Please connect your wallet to access settings.
          </p>
          <ConnectWallet />
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="grid gap-8 max-w-2xl">
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label>Default Slippage Tolerance (0.5%)</Label>
            <Slider defaultValue={[0.5]} max={2} step={0.1} />
          </div>

          <div className="space-y-2">
            <Label>Max Gas Price (Gwei)</Label>
            <Input type="number" placeholder="50" />
          </div>

          <div className="space-y-2">
            <Label>Default Token</Label>
            <Input type="text" placeholder="USDC" />
          </div>

          <Button>Save Settings</Button>
        </Card>
      </div>
    </div>
  )
}