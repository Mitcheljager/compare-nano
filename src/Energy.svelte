<script>
  import { currentCoin, nano } from "./stores/coins.js"

  $: comparedTransactionsAmount = Math.floor($currentCoin.usage / $nano.usage)
</script>



<center>
  <h2>Energy usage per transaction in kWh</h2>
</center>

<div class="rows">
  <div class="block">
    <h3><strong>{ $currentCoin.name }</strong>: { $currentCoin.usage } kWh</h3>
    <p>Each block is 1000 pixels and represents 1000 <strong class="color-nano">Nano</strong> transactions</p>

    <div class="grid">
      { #each { length: Math.floor(comparedTransactionsAmount / 1000) } as _, i }
        <div class="item" />
      { /each }
    </div>
  </div>

  <div class="block">
    <h3><strong class="color-nano">Nano:</strong> { $nano.usage } kWh</h3>
    <p>Difficult to see but here's 1 pixel, representing 1 <strong class="color-nano">Nano</strong> transaction</p>
    
    <div class="grid">
      <div class="nano" />
    </div>
  </div>
</div>

<h3><center>
  For <span class="color-white">1 { $currentCoin.name }</span> transaction <br>
  you could make roughly <br>
  <span class="color-white">{ comparedTransactionsAmount.toLocaleString() }</span> <strong class="color-nano">Nano</strong> transactions
</center></h3>



<style lang="scss">
  p {
    font-style: italic;
    font-size: .85rem;
  }

  h2 {
    margin-top: clamp(3rem, 10vw, 5rem);
  }

  .block {
    display: flex;
    flex-direction: column;
  }

  .rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(.75rem, 2vw, 1.5rem);
  }

  .grid {
    display: grid;
    grid-gap: clamp(.1rem, 2vw, .5rem);
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    padding: clamp(.75rem, 2vw, 1.5rem);
    border-radius: 1rem;
    height: 100%;
    background: var(--content);
    box-shadow: var(--shadow-big);
  }

  .item {
		width: 31.62px;
		height: 31.62px;
		background: var(--nano);
    box-shadow: var(--shadow);
	}

  .nano {
    width: 1px;
    height: 1px;
    background: var(--nano);
    box-shadow: var(--shadow);
  }
</style>
