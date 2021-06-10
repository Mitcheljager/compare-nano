import { readable, writable, derived } from "svelte/store"

export const currentCoinIndex = writable(1)

export const coins = readable([
  {
    name: "Nano",
    usage: 0.000112
  },
  {
    name: "Bitcoin",
    usage: 612,
    tps: 4.6
  },
  {
    name: "Ethereum",
    usage: 50,
    tps: 15
  }
])

export const nano = derived(
  coins,
  $coins => $coins.filter(c => c.name == "Nano")[0]
)

export const currentCoin = derived(
  [coins, currentCoinIndex],
  ([$coins, $currentCoinIndex]) => $coins[$currentCoinIndex]
)
