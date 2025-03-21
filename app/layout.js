import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HedgeTradeX - Advanced Flash Loan Arbitrage Platform',
  description: 'Execute and track flash loan arbitrage strategies in real-time',
  creator: 'Christophe Manzi',
  copyright: '© 2025 Christophe Manzi. All rights reserved.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}