"use client"

import { useEffect, useState } from "react"
import { useNetwork, usePublicClient, useSwitchNetwork } from "wagmi"
import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { formatEther, formatUnits } from "viem"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SUPPORTED_NETWORKS = {
  arbitrum: {
    name: "Arbitrum One",
    coinGeckoId: "arbitrum",
    symbol: "ETH",
    warningThreshold: 20, // USD
    chainId: 42161,
  },
  ethereum: {
    name: "Ethereum",
    coinGeckoId: "ethereum",
    symbol: "ETH",
    warningThreshold: 50,
    chainId: 1,
  },
  polygon: {
    name: "Polygon",
    coinGeckoId: "matic-network",
    symbol: "MATIC",
    warningThreshold: 15,
    chainId: 137,
  },
}

export function GasTracker() {
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const publicClient = usePublicClient()
  
  const [gasPrice, setGasPrice] = useState<bigint | null>(null)
  const [tokenPrice, setTokenPrice] = useState<number | null>(null)
  const [estimatedGas, setEstimatedGas] = useState<bigint | null>(BigInt(82340))
  const [isLoading, setIsLoading] = useState(true)
  const [selectedNetwork, setSelectedNetwork] = useState<string>("arbitrum")

  const currentNetwork = SUPPORTED_NETWORKS[selectedNetwork]

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const price = await publicClient.getGasPrice()
        setGasPrice(price)
      } catch (error) {
        console.error("Failed to fetch gas price:", error)
      }
    }

    const fetchTokenPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${currentNetwork.coinGeckoId}&vs_currencies=usd`
        )
        const data = await response.json()
        setTokenPrice(data[currentNetwork.coinGeckoId].usd)
      } catch (error) {
        console.error("Failed to fetch token price:", error)
      }
    }

    const updatePrices = async () => {
      setIsLoading(true)
      await Promise.all([fetchGasPrice(), fetchTokenPrice()])
      setIsLoading(false)
    }

    updatePrices()
    const interval = setInterval(updatePrices, 15000)

    return () => clearInterval(interval)
  }, [publicClient, currentNetwork.coinGeckoId])

  const handleNetworkChange = (network: string) => {
    setSelectedNetwork(network)
    if (switchNetwork) {
      switchNetwork(SUPPORTED_NETWORKS[network].chainId)
    }
  }

  if (isLoading || !gasPrice || !tokenPrice || !estimatedGas) {
    return (
      <Card className="p-6 space-y-2 animate-pulse">
        <div className="h-4 bg-muted rounded w-1/3"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
      </Card>
    )
  }

  const gasPriceGwei = formatUnits(gasPrice, 9)
  const totalGasCostEth = formatEther(gasPrice * estimatedGas)
  const totalGasCostUsd = Number(totalGasCostEth) * tokenPrice

  const showWarning = totalGasCostUsd > currentNetwork.warningThreshold

  return (
    <Card className="p-6 space-y-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Network</span>
          <Select value={selectedNetwork} onValueChange={handleNetworkChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(SUPPORTED_NETWORKS).map(([key, network]) => (
                <SelectItem key={key} value={key}>
                  {network.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Estimated Gas</span>
          <span className="font-mono">{estimatedGas.toString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Gas Price</span>
          <span className="font-mono">{Number(gasPriceGwei).toFixed(2)} Gwei</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Total Cost</span>
          <div className="text-right">
            <div className="font-mono">
              {Number(totalGasCostEth).toFixed(6)} {currentNetwork.symbol}
            </div>
            <div className="text-sm text-muted-foreground">
              (${totalGasCostUsd.toFixed(2)} USD)
            </div>
          </div>
        </div>
      </div>

      {showWarning && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Gas cost is unusually high. Consider waiting for lower gas prices.
          </AlertDescription>
        </Alert>
      )}
    </Card>
  )
}