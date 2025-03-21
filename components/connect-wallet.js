"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from '@/components/ui/button'

export function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted
        if (!ready) return null

        if (!account) {
          return (
            <Button onClick={openConnectModal} size="lg">
              Connect Wallet
            </Button>
          )
        }

        if (chain?.unsupported) {
          return (
            <Button onClick={openChainModal} variant="destructive" size="lg">
              Wrong network
            </Button>
          )
        }

        return (
          <div className="flex items-center gap-4">
            <Button
              onClick={openChainModal}
              variant="outline"
              size="sm"
              className="hidden sm:flex"
            >
              {chain?.name}
            </Button>

            <Button
              onClick={openAccountModal}
              variant="outline"
              size="sm"
            >
              {account.displayName}
            </Button>
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}