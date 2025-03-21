export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      <div className="prose prose-invert max-w-none">
        <h2>Getting Started with HedgeTradeX</h2>
        <p>
          HedgeTradeX is an advanced flash loan arbitrage platform that enables you
          to execute profitable trades across different decentralized exchanges.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Flash Loan Integration with Aave protocol</li>
          <li>Real-time price monitoring across DEXs</li>
          <li>Advanced simulation mode for strategy testing</li>
          <li>Gas optimization and slippage protection</li>
        </ul>

        <h3>How It Works</h3>
        <p>
          Flash loans allow you to borrow assets without collateral, as long as the
          borrowed amount is returned within the same transaction. HedgeTradeX
          leverages this mechanism to execute arbitrage trades across different
          DEXs.
        </p>

        <h3>Safety Measures</h3>
        <ul>
          <li>Simulation mode to test strategies without risk</li>
          <li>Slippage protection to prevent unexpected losses</li>
          <li>Gas price limits to avoid overpaying for transactions</li>
        </ul>
      </div>
    </div>
  )
}