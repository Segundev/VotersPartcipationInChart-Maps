<script>
  export let yScale;
  export let innerWidth;
  export let margin;
  export let region;
</script>

<g class="axis y">
  {#each region as tick}
    <g class="tick">
      <line
        x1={0}
        y1={yScale(tick) + 25}
        x2={innerWidth + margin.right}
        y2={yScale(tick) + 25}
        stroke="black"
      />
      <text y={yScale(tick)} dy="5" class="small">{tick}</text>
    </g>
  {/each}
</g>

<style>
  .tick line {
    stroke: #999;
    stroke-dasharray: 2;
  }
</style>
