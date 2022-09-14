<script lang="ts">
    export let page: number;
</script>

<div class="controls">
    <p class="warning">
        You must read all of the terms and conditions in order to proceed. Page {page}
        of {page + Math.ceil(Math.log(page)) + 1}
    </p>
    <input disabled placeholder="Your Legal Name" />
    <button class="accept-button" disabled>Accept</button>
</div>

<style>
    .controls {
        padding: 1em;
    }
    .warning {
        --color: var(--del-color);
    }
    .accept-button {
        cursor: not-allowed !important;
    }
</style>
