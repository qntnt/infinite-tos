<script lang="ts">
  import Controls from "./lib/Controls.svelte";
  import Terms from "./lib/Terms.html?raw";
  import MyImmortal from "./lib/MyImmortal.html?raw";
  import DontPretend from "./lib/DontPretend.html?raw";
  import LittleBitch from "./lib/LittleBitch.html?raw";
  import InfiniteScroll from "svelte-infinite-scroll";

  let pageNum = 0;
  let pages = [];
  const sources = [Terms, DontPretend, MyImmortal, LittleBitch];

  let getNextPage = (count: number) => {
    let source = count % sources.length;
    return sources[source];
  };

  $: pages = [...pages, getNextPage(pageNum)];
</script>

<main>
  <div class="terms">
    <h1>Terms and Conditions</h1>
    <p>Last updated: September 14, 2022</p>
    <p>
      Please read these terms and conditions carefully before using Our Service.
    </p>
    {#each pages as page}
      <br />
      {@html page}
    {/each}
    <InfiniteScroll threshold={100} on:loadMore={() => pageNum++} />
  </div>
  <div class="controls">
    <Controls page={pageNum + 1} />
  </div>
</main>

<style>
  main {
    height: 100vh;
  }
  .terms {
    padding: 1em;
    height: 70%;
    overflow-y: scroll;
  }
  .controls {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
