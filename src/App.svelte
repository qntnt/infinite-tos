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
  let termsContainer: HTMLElement;
</script>

<main>
  <div class="container" bind:this={termsContainer}>
    <div class="terms-container">
      <h1>Terms and Conditions</h1>
      <p class="author">
        SYZYGY CORPORATION <br /> Last updated: November 8, 2022
      </p>
      <small>
        <input
          type="checkbox"
          checked={nsfwEnabled}
          on:change={() => (nsfwEnabled = !nsfwEnabled)}
        />
        {nsfwEnabled ? "NSFW" : "SFW"}
      </small>
      <hr />
      {#each pages as page}
        <br />
        {@html page.text}
      {/each}
    </div>
    <InfiniteScroll
      elementScroll={termsContainer}
      threshold={100}
      on:loadMore={() => pageNum++}
    />
  </div>
  <div class="controls-container">
    <Controls page={pageNum + 1} />
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0;
    --line-color: rgba(0, 0, 0, 0.3);
  }
  hr {
    color: var(--line-color);
    width: 100%;
    border: 0px double var(--line-color);
    border-top-width: 3px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .terms-container {
    /* max-width: 50em; */
    flex-grow: 1;
    overflow-wrap: break-word;
    /* overflow-y: scroll; */
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
  .controls-container {
    flex-shrink: 1;
    border-top: 1px solid var(--line-color);
    padding: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
