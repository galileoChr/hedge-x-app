import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TOKENS = [
  { symbol: 'USDC', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024' },
  { symbol: 'DAI', logo: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=024' },
  { symbol: 'USDT', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024' },
]

const STRATEGIES = [
  { id: 'uniswap', label: 'Uniswap' },
  { id: 'uniswap-sushi', label: 'Uniswap → Sushi' },
  { id: 'custom', label: 'Custom' },
]

export function FlashLoanForm({ onSimulate, onExecute }) {
  const [token, setToken] = useState('')
  const [amount, setAmount] = useState('')
  const [slippage, setSlippage] = useState(0.5)
  const [strategy, setStrategy] = useState('uniswap')
  const [simulation, setSimulation] = useState(true)

  const handleSimulate = () => {
    onSimulate({
      token,
      amount,
      slippage,
      strategy,
      simulation
    })
  }

  const handleExecute = () => {
    onExecute({
      token,
      amount,
      slippage,
      strategy,
      simulation
    })
  }

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <Label>Trading Asset</Label>
        <Select value={token} onValueChange={setToken}>
          <SelectTrigger>
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent>
            {TOKENS.map((token) => (
              <SelectItem key={token.symbol} value={token.symbol}>
                <div className="flex items-center gap-2">
                  <img src={token.logo} alt={token.symbol} className="w-5 h-5" />
                  <span>{token.symbol}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Trade Amount</Label>
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Slippage Tolerance ({slippage}%)</Label>
        <Slider
          value={[slippage]}
          onValueChange={([value]) => setSlippage(value)}
          max={2}
          step={0.1}
        />
      </div>

      <div className="space-y-2">
        <Label>Strategy Type</Label>
        <RadioGroup value={strategy} onValueChange={setStrategy}>
          {STRATEGIES.map((s) => (
            <div key={s.id} className="flex items-center space-x-2">
              <RadioGroupItem value={s.id} id={s.id} />
              <Label htmlFor={s.id}>{s.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          checked={simulation}
          onCheckedChange={setSimulation}
          id="simulation"
        />
        <Label htmlFor="simulation">Enable Dry Run Mode</Label>
      </div>

      <div className="space-x-4">
        <Button
          onClick={handleSimulate}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          Dry Run Strategy
        </Button>
        <Button
          onClick={handleExecute}
          variant="outline"
          className="border-pink-500 text-pink-500 hover:bg-pink-500/10"
        >
          Execute Trade
        </Button>
      </div>
    </Card>
  )
}