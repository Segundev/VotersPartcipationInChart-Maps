<script>
  export let data;
  export let xScale;
  export let yScale;
  export let innerWidth;

  const xNudge = 15;
  const yNudge = 15;

  let tooltipWidth;

  $: x = xScale(data[2023]);
  $: y = yScale(data.Zones);

  $: xPosition = x + tooltipWidth > innerWidth ? x - tooltipWidth : x;
  $: yPosition = y + yNudge;

  $: console.log(tooltipWidth);
</script>

<div
  bind:clientWidth={tooltipWidth}
  class="tooltip"
  style="position:absolute; top:{yPosition}px; left:{xPosition}px"
>
  <p>State: <span class="tooltip-text"> {data.State}</span></p>
  <p>
    Participation Rate: <span class="tooltip-text">
      {Math.floor(data[2023] * 100)}%
    </span>
  </p>
  <p>Region: <span class="tooltip-text"> {data.Zones} </span></p>
</div>

<style>
  .tooltip {
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 0.2rem 1rem;
  }

  .tooltip p {
    padding: 0.15rem;
    font-family: "Lato";
    margin: 1.2px;
    font-size: 14px;
    font-weight: 400;
    color: #808080;
  }

  .tooltip-text {
    padding-right: 0.5rem;
    margin: 0px;
    font-family: "Lato";
    font-size: 14px;
    font-weight: 800;
    color: #3d3d3d;
    display: inline-block;
  }
</style>
