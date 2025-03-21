import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ExternalLink } from "lucide-react"

const MOCK_TRADES = [
  {
    id: 1,
    timestamp: "2025-03-20T14:30:00Z",
    strategy: "Uniswap → Sushi",
    tokens: "USDC → ETH → USDC",
    gasSpent: "0.0042",
    profitLoss: "+0.038",
    status: "Confirmed",
    txHash: "0x123...abc",
  },
  // Add more mock trades as needed
]

export function TradeHistory() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Trade History</h2>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date/Time</TableHead>
              <TableHead>Strategy</TableHead>
              <TableHead>Tokens</TableHead>
              <TableHead>Gas Spent (ETH)</TableHead>
              <TableHead>Profit/Loss (ETH)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_TRADES.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell>
                  {new Date(trade.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{trade.strategy}</TableCell>
                <TableCell>{trade.tokens}</TableCell>
                <TableCell>{trade.gasSpent}</TableCell>
                <TableCell className={trade.profitLoss.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {trade.profitLoss}
                </TableCell>
                <TableCell>{trade.status}</TableCell>
                <TableCell>
                  <a
                    href={`https://etherscan.io/tx/${trade.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-400"
                  >
                    {trade.txHash.slice(0, 6)}...{trade.txHash.slice(-4)}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}