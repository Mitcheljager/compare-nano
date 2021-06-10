<script>
  import { currentCoin } from "./stores/coins.js"
  import { usageByTime, nanoEquivalentUsageByTime } from "./stores/data.js"
</script>


<center>
  <h2>
    Since you've been on this page { $currentCoin.name } has consumed roughly <br>
    <strong class="color-white">{ $usageByTime.toLocaleString() } kWh</strong><br>
  </h2>

  <small>Based on { $currentCoin.tps } transactions per second</small>

  <p>
    If <strong class="color-nano">Nano</strong> had an equivalent TPS it would have used roughly<br>
    <strong>{ $nanoEquivalentUsageByTime.toLocaleString() } kWh</strong>
  </p>
</center>



<style lang="scss">
  h2 {
    margin: 0 0 1rem;
  }

  center {
    display: block;
    margin: 10rem 0;
  }
</style>
