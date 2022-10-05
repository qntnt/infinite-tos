<script lang="ts">
  import Controls from "./lib/Controls.svelte";
  import CopyrightClause from "./lib/CopyrightClause.html?raw";
  import Terms from "./lib/Terms.html?raw";
  import MyImmortal from "./lib/MyImmortal.html?raw";
  import DontPretend from "./lib/DontPretend.html?raw";
  import LittleBitch from "./lib/LittleBitch.html?raw";
  import InfiniteScroll from "svelte-infinite-scroll";

  let nsfwEnabled = true;

  interface Item {
    text: string;
    nsfw: boolean;
  }

  let pageNum = 0;
  let pages = [];
  const sources: Item[] = [
    { text: Terms, nsfw: false },
    { text: DontPretend, nsfw: true },
    { text: MyImmortal, nsfw: true },
    { text: LittleBitch, nsfw: true },
  ];

  let getNextPage = (count: number) => {
    if (nsfwEnabled) {
      let source = count % sources.length;
      return sources[source];
    } else {
      const sfwSources = sources.filter((p) => !p.nsfw);
      let source = count % sfwSources.length;
      return sfwSources[source];
    }
  };

  $: pages = [...pages, getNextPage(pageNum)];
</script>

<main>
  <div class="terms">
    <h1>Terms and Conditions</h1>
    <small>
      <input
        type="checkbox"
        checked={nsfwEnabled}
        on:change={() => (nsfwEnabled = !nsfwEnabled)}
      />
      {nsfwEnabled ? "NSFW" : "SFW"}
    </small>
    <p>Last updated: September 14, 2022</p>
    <p>
      Please read these terms and conditions carefully before using Our Service.
    </p>
    {#each pages as page}
      <br />
      {@html page.text}
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
