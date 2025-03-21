import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export function SimulationResult({ result }) {
  if (!result) return null

  return (
    <Card className="p-6 space-y-4 bg-black/50 backdrop-blur">
      <h3 className="text-xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        Strategy Analysis
      </h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Trading Asset</span>
          <span className="font-mono">{result.token} {result.amount}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Liquidity Path</span>
          <div className="flex items-center gap-2">
            <span>Uniswap</span>
            <ArrowRight className="w-4 h-4" />
            <span>Sushi</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Expected Profit</span>
          <div>
            <span className="font-mono text-green-500">+0.038 ETH</span>
            <span className="text-muted-foreground ml-2">(~$76.00)</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Protocol Fee</span>
          <div>
            <span className="font-mono">0.0042 ETH</span>
            <span className="text-muted-foreground ml-2">(~$8.40)</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Slippage Impact</span>
          <span className="font-mono text-yellow-500">0.15%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Execution Time</span>
          <span className="font-mono">~15 seconds</span>
        </div>

        {result.txHash && (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Transaction</span>
            <a
              href={`https://etherscan.io/tx/${result.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-500 hover:text-blue-400"
            >
              View on Etherscan
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </Card>
  )
}