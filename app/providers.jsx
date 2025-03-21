"use client"

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig, chains } from '@/lib/wagmi'
import { ThemeProvider } from "@/components/theme-provider"
import '@rainbow-me/rainbowkit/styles.css'

export function Providers({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        coolMode
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}