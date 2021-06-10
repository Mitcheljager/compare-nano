import { readable, derived } from "svelte/store"
import { nano, currentCoin } from "./coins.js"

const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => { set(new Date()) }, 1000)

	return function stop() {
		clearInterval(interval)
	}
})

const start = new Date()

const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
)

export const usageByTime = derived(
  [currentCoin, elapsed],
  ([$currentCoin, $elapsed]) => Math.floor(($currentCoin.usage * $currentCoin.tps) * $elapsed)
)

export const nanoEquivalentUsageByTime = derived(
  [nano, currentCoin, elapsed],
  ([$nano, $currentCoin, $elapsed]) => ($nano.usage * $currentCoin.tps) * $elapsed
)
