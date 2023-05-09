<script>
  import AxisX from "$components/AxisX.svelte";
  import AxisY from "$components/AxisY.svelte";
  import Tooltip from "$components/Tooltip.svelte";
  import data from "$data/data.js";
  import { fly, fade } from "svelte/transition";
  import { cubicIn } from "svelte/easing";

  import { scaleLinear, scaleBand, scaleOrdinal } from "d3-scale";
  import { max, extent, mean } from "d3-array";

  const label = [
    "Abia",
    "Plateau",
    "Jigawa",
    "Osun",
    "Rivers",
    "Lagos",
    "Kogi",
    "Borno",
    "Adamawa",
    "Anambra",
    "Zamfara",
  ];
  let a = "Abia";

  let RADIUS = 5;
  let width = 400;
  let height = 400;
  const margin = { top: 20, right: 20, bottom: 20, left: 100 };
  const averageParticipationRate = mean(data.map((d) => d[2023]));

  let innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.right - margin.right;

  const region = [
    "North Central",
    "North West",
    "North East",
    "South West",
    "South East",
    "South South",
  ];

  $: xScale = scaleLinear()
    .domain(extent(data, (d) => d[2023]))
    .range([margin.left, innerWidth]);

  let yScale = scaleBand()
    .domain(data.map((d) => d.Zones))
    .range([margin.top, innerHeight]);

  let scaleColor = scaleOrdinal()
    .domain(region)
    .range(["#4e79a7", "#e15759", "#f28e2b", "#edc948", "#76b7b2", "#59a14f"]);

  let hovered;
  let averageLine;

  !(function () {
    "use strict";
    window.addEventListener("message", function (a) {
      if (void 0 !== a.data["datawrapper-height"]) {
        var e = document.querySelectorAll("iframe");
        for (var t in a.data["datawrapper-height"])
          for (var r = 0; r < e.length; r++)
            if (e[r].contentWindow === a.source) {
              var i = a.data["datawrapper-height"][t] + "px";
              e[r].style.height = i;
            }
      }
    });
  })();
</script>

<div>
  <main>
    <header class="main-headline">
      <div class="headline-wrapper">
        <h1 class="headline">
          Using charts and maps, how did <br /><span
            class="headline-inline-background">Nigerian voters turn out?</span
          >
          <p>By Jayeola Gbenga</p>
        </h1>
      </div>
    </header>
    <article>
      <section>
        <div class="component-paragraph">
          <p>
            The number of voters who participate in an election has a
            significant impact on the outcome. Several media outlets projected
            the outcome of the election on the basis of a large turnout.
            However, only <span class="text-inline" style="background:#006d2c">
              24.9 million
            </span>
            voted out of
            <span class="text-inline" style="background:#033160">
              93.47 million
            </span> registered voters. In simpler words, approximately only 3 out
            of 10 registered voters were able to cast their vote. This compared to
            7 out of 10 in 2003.
          </p>
        </div>
      </section>
      <section>
        <div class="subtitle-wrapper component-paragraph">
          <h2 class="subtitle-headline">
            The graphics below highlight significant facts concerning trends in
            voter turnout in Nigeria.
          </h2>
        </div>
      </section>
      <section>
        <div class="component-paragraph">
          <p>
            <span class="number-inline">*</span>
            <strong>
              Voter turnout in the
              <span class="text-inline" style="background:#006d2c">2023</span>
              presidential and national assembly elections was the lowest ever recorded
              since democracy was established in 1999</strong
            >. The participation rate recorded was
            <span class="text-inline" style="background:#006d2c">
              26.74%
            </span>, implying that barely 3 out of every 10 registered voters
            exercised their voting rights on election day by casting their
            votes. Between 1999 and 2011, voter participation on average was
            greater than 50%, with more than 5 out of 10 registered voters eager
            to cast their votes.
          </p>
        </div>
        <div class="datawrapper-component">
          <iframe
            title=""
            aria-label="Interactive line chart"
            id="datawrapper-chart-nLj0G"
            src="https://datawrapper.dwcdn.net/nLj0G/1/"
            scrolling="no"
            frameborder="0"
            style="width: 0; min-width: 100% !important; border: none;"
            height="400"
            data-external="1"
          />
        </div>
      </section>

      <section>
        <div class="component-paragraph">
          <p>
            <span class="number-inline">*</span>
            <strong> Voter turnout has been declining since 2007.</strong> Even though
            the number of registered voters has increased throughout the years, participation
            rate has been declining. The 2023 election surprised many Nigerians,
            who expected a huge voter participation due to the country's economic
            woes prior to the election. In addition, 40% of registered voters were
            between the ages of 18 and 34. These figures were expected to have an
            impact on election day, as witnessed during the Endsars protest in 2020,
            when youths took to the streets to demand the disbandment of the popular
            police unit, the Special Anti-Robbery Squad, owing to incidents of extrajudicial
            executions, extortion, and intimidation.
          </p>
        </div>
        <div class="datawrapper-component">
          <iframe
            title=""
            aria-label="Column Chart"
            id="datawrapper-chart-kT5y4"
            src="https://datawrapper.dwcdn.net/kT5y4/3/"
            scrolling="no"
            frameborder="0"
            style="width: 0; min-width: 100% !important; border: none;"
            height="434"
            data-external="1"
          />
        </div>
      </section>
      <section>
        <div class="component-paragraph">
          <p>
            <span class="number-inline">*</span>
            <strong> Southern states have a low level of interest.</strong> In the
            just-concluded election, Rivers State recorded the lowest turnout among
            36 states, including the FCT. All the states in the south-south and south-east
            geopolitical zones were less than the national average of 26.7%.
          </p>
        </div>
        <div class="container-max">
          <div class="datawrapper-flex">
            <div class="datawrapper-map">
              <iframe
                title=""
                aria-label="Map"
                id="datawrapper-chart-zlOk0"
                src="https://datawrapper.dwcdn.net/zlOk0/9/"
                scrolling="no"
                frameborder="0"
                style="width: 0; min-width: 100% !important; border: none;"
                height="553"
                data-external="1"
              />
            </div>
            <div class="datawrapper-map">
              <iframe
                title=""
                aria-label="Map"
                id="datawrapper-chart-w4o2Z"
                src="https://datawrapper.dwcdn.net/w4o2Z/8/"
                scrolling="no"
                frameborder="0"
                style="width: 0; min-width: 100% !important; border: none;"
                height="553"
                data-external="1"
              />
            </div>
            <div class="datawrapper-map">
              <iframe
                title=""
                aria-label="Map"
                id="datawrapper-chart-jtgiW"
                src="https://datawrapper.dwcdn.net/jtgiW/8/"
                scrolling="no"
                frameborder="0"
                style="width: 0; min-width: 100% !important; border: none;"
                height="553"
                data-external="1"
              />
            </div>
          </div>
        </div>
        <div class="component-paragraph">
          <p>
            <strong>
              Voter's participation in the southern and southern-eastern states
              have been low in the last two general elections.</strong
            > Bayelsa, Delta, and Rivers had above 60% participation in the 2015
            general election, but the numbers have dropped dramatically, with both
            Bayelsa and Rivers registering the lowest turnout in 2023. The same is
            true in the southeast, which had low turnout in 2019 and 2023 compared
            to the 2015 general election.
          </p>
        </div>
      </section>

      <div class="datawrapper-component">
        <div
          class="figure"
          bind:clientWidth={width}
          on:mouseleave={() => (hovered = null)}
        >
          <h2 class="chart-dotplot-header">
            2023 Voters Participation across all 36 States & FCT
          </h2>
          <svg {width} {height}>
            <g
              class="innerChart"
              transform="translate({(margin.left, margin.top)})"
            >
              <!-- Circles Section -->
              <g class="dot">
                {#each data.sort((a, b) => a[2023] - b[2023]) as d}
                  {#if label.includes(d.State)}
                    <text
                      class="text"
                      x={xScale(d[2023])}
                      y={yScale(d.Zones)}
                      dx="-20"
                      dy="-10"
                    >
                      {d.State}</text
                    >
                  {/if}
                  <circle
                    cx={xScale(d[2023])}
                    cy={yScale(d.Zones)}
                    r={hovered === d ? RADIUS * 2 : RADIUS}
                    fill={scaleColor(d.Zones)}
                    opacity={hovered ? (hovered == d ? 0.8 : 0.4) : 0.7}
                    stroke="#222222"
                    stroke-width="1"
                    on:mouseover={() => (hovered = d)}
                  />
                {/each}
                <g
                  on:mouseleave={() => (averageLine = false)}
                  transform="translate({xScale(averageParticipationRate)},)"
                >
                  <g
                    class:active={averageLine}
                    on:mouseover={() => (averageLine = true)}
                  >
                    <line
                      class="average"
                      x1={xScale(averageParticipationRate)}
                      y1={margin.top - 10}
                      x2={xScale(averageParticipationRate)}
                      y2={innerHeight - margin.bottom - 10}
                      stroke-width="2"
                    />
                    <text
                      x={xScale(averageParticipationRate)}
                      y={margin.top}
                      class="text"
                    >
                      &rarr; National Average
                    </text>
                  </g>
                </g>
              </g>

              <!-- AxisY Section -->
              <AxisY {innerWidth} {yScale} {region} {margin} />

              <!-- AxisX Section -->
              <AxisX {innerHeight} {xScale} />
            </g>
          </svg>

          {#if hovered}
            <Tooltip data={hovered} {xScale} {yScale} {innerWidth} />
          {/if}
        </div>
      </div>
      <section>
        <div class="component-paragraph">
          <p>
            <span class="number-inline">*</span>
            <strong>
              Lagos State with the highest number of registered voters has
              performed woefully over the years
            </strong>. Amidst incidences of voter suppression, intimidation, and
            violence, results from Lagos State had a surprising turn of events.
            Peter Obi secured the majority of votes in Lagos in the just
            completed presidential election. Bola Ahmed Tinubu,
            presidential-elect, two-term governor of the state, and considered
            as the kingmaker, finished second in his home state. However, the
            surprise from the outcome does not diminish the fact that residents
            of Africa's largest economy have failed to participate in elections
            at various times.
          </p>
        </div>
        <div class="datawrapper-component">
          <iframe
            title="The states with the lowest literacy rate recorded the highest voter turnout."
            aria-label="Scatter Plot"
            id="datawrapper-chart-cyWPD"
            src="https://datawrapper.dwcdn.net/cyWPD/3/"
            scrolling="no"
            frameborder="0"
            style="width: 0; min-width: 100% !important; border: none;"
            height="600"
            data-external="1"
          />
        </div>
        <div class="component-paragraph">
          <p>
            Lagos State has the highest number of registered voters. likewise
            the former British colony and nation's capital has the highest and
            most educated populace in the country. This, however, has had little
            effect on voters turnout. Moreso, some of the states with high
            numbers of educated citizens have failed to turn up during the
            election period. Reverse is the case in less educated states. In the
            last election, Jigawa State, with the least educated population in
            the nation, recorded the highest turnout rate. One of the reasons
            for this, and also has been consistent during election period is
            underage voting. At various times, it has been documented that
            children who are below the voting age of 18 owns the permanent voter
            card(PVC) and are also seen voting on election day.
          </p>
        </div>
        <div class="component-paragraph">
          <p>
            As earlier highlighted, one of the reasons for high voter turn out
            in previous elections was under age voting. But this could happen
            frequently when voters registration was done manually. Before INEC
            decided to go digital in 2007, cases of multiple registers and over
            voting was rampant.
          </p>
          <p>
            The introduction of Card readers in 2015 reduced some of the
            loopholes. But individuals could still by pass the system. In 2021,
            INEC introduced the Bimodal Voter Accreditation System to improve
            the election architecture. PVC authentication and Voter
            accreditation, electoral officers could easily detect and
            malpractise in place.
          </p>
          <p>
            Another factor affecting low voters turnout is the uncertainty in
            the true number of Registered voters. With the high rate of
            Nigerians migrating to the west and also individuals who have passed
            away in the last couple of years, the present number of registered
            voters does not reflect the genuine picture.
          </p>
        </div>
      </section>
    </article>
  </main>
</div>

<style>
  .headline-inline-background {
    background: #006d2c;
    padding: 1px;
    color: beige;
    margin-top: 4.9px;
  }

  .number-inline {
    float: left;
    margin-right: 1rem;
    font-family: "Tinos";
    font-weight: bold;
    font-size: 3.5rem;
    color: #2f4b00;
  }

  .text-inline {
    padding: 3px;
    color: #ffffff;
    font-weight: bold;
    display: inline-block;
    border-radius: 3px;
  }

  .headline {
    padding: 1.5rem;
    font-family: "Tinos";
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.2;
    color: #141414;
  }

  .headline-wrapper p {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.2;
    color: #686868;
    margin: 2rem 0;
  }

  .container-max {
    width: 95%;
    max-width: 960px;
    margin: 1px auto;
  }

  .component-paragraph h2 {
    font-weight: bold;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    text-decoration: underline;
  }

  .headline-wrapper {
    display: flex;
    justify-content: center;
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
    padding-top: 7rem;
  }

  .component-paragraph {
    width: 90%;
    max-width: 550px;
    margin: 2px auto;
    font-family: "Tinos";
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #313131;
  }

  .component-paragraph p {
    margin-bottom: 2.5rem;
  }

  .datawrapper-component {
    width: 80%;
    max-width: 550px;
    margin: 2rem auto;
  }

  .datawrapper-flex {
    display: flex;
  }

  .datawrapper-map {
    width: 80%;
    margin: 1rem;
  }

  :global(.tick text) {
    font-family: "Lato";
    font-size: 14px;
    fill: #808080;
  }

  .chart-dotplot-header {
    font-family: "Lato";
    font-size: 1rem;
    font-weight: 800;
    fill: #808080;
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  .text {
    font-family: "Lato";
    font-size: 14px;
    font-weight: 400;
    fill: #808080;
  }

  .figure {
    display: none;
    position: relative;
  }

  .average {
    stroke: #999;
    stroke-dasharray: 5;
  }

  .active line {
    stroke: #404040;
    stroke-width: 3;
    stroke-dasharray: 0;
  }

  .active text {
    fill: #404040;
  }

  @media (max-width: 700px) {
    .datawrapper-flex {
      flex-direction: column;
      align-items: center;
    }
  }
</style>