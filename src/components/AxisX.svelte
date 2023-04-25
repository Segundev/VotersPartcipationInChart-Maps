<script>
  export let innerHeight;
  export let xScale;
  let ticks = [0.15, 0.2, 0.25, 0.3, 0.35, 0.4];
</script>

<g class="axis x" transform="translate(-10, {innerHeight})">
  {#each ticks as tick}
    <g class="tick" transform="translate({xScale(tick)},0)">
      <text y={-10} text-anchor="start" class="small">{tick * 100}%</text>
    </g>
  {/each}
</g>
