<script>
  import { coins, currentCoin, currentCoinIndex } from "./stores/coins.js"
</script>


Compare <strong class="color-nano">Nano</strong> to:

<div class="buttons">
  { #each $coins.filter(c => c.name != "Nano") as coin, index }
    <button
      class:active={ coin.name == $currentCoin.name }
      on:click={ () => $currentCoinIndex = index + 1 }>{ coin.name }</button>
  { /each }
</div>



<style lang="scss">
  .buttons {
    display: flex;
    justify-content: center;
    margin: 1rem 0 0;
  }

  button {
    appearance: none;
    padding: .5rem 1rem;
    margin: 0 .25rem;
    border: 0;
    border-radius: 99px;
    background: var(--content);
    
    color: var(--text);
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 100ms, color 100ms, box-shadow 150ms;

    &.active,
    &:hover,
    &:active {
      background: var(--text-dark);
      color: var(--text-light);
    }

    &.active {
      box-shadow: var(--shadow);
      color: white;
    }
  }
</style>
