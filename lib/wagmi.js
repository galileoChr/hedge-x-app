import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'HedgeTradeX',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export { chains }