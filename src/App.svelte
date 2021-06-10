<script>
	import Energy from "./Energy.svelte"
	import Timed from "./Timed.svelte"
	import CoinSelect from "./CoinSelect.svelte"

	import { currentCoin } from "./stores/coins.js"

	export let name
</script>



<header class="header">
	<div class="header__content">
		<h1>Compare <strong>Nano</strong></h1>

		<CoinSelect />
	</div>

	<div class="background">
		<svg preserveAspectRatio="none" width="1440px" height="109px" viewBox="0 0 1440 109">
			<path fill="var(--body)" fill-opacity="1" d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,96C840,85,960,43,1080,32C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
		</svg>	
	</div>
</header>

<main>
	{ #if $currentCoin }
		<Energy />
		<Timed />
	{ /if }
</main>

<footer>
	Footer
</footer>



<style lang="scss">
	.header {
		background: var(--content);
		position: relative;
		text-align: center;
		margin: 0 auto;
	}

	.header__content {
		position: relative;
		z-index: 1;
	}

	h1 {
		margin: 0;
		padding: clamp(3rem, 10vw, 5rem) 0;
		color: var(--text-heading);
		text-transform: uppercase;
		font-weight: 100;
		text-shadow: var(--shadow-big);

		strong {
			color: white;
		}
	}

	main {
		max-width: 640px;
		margin: 0 auto;
		padding: 1.5rem;
	}

	.background {
		position: absolute;
		width: 100%;
		bottom: -1px;
		transform: scale(-1);

    :global(svg) {
      display: block;
      height: clamp(50px, 20vw, 250px);
      width: calc(100% + 2px);
      margin-left: -1px;
    }
  }
</style>
