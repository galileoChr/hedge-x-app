"use client"

import { TradeHistory } from "@/components/dashboard/trade-history"

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Trade History</h1>
      <TradeHistory />
    </div>
  )
}