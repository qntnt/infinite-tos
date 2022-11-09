<script lang="ts">
    export let page: number;
</script>

<p class="warning">
    You must read all of the terms and conditions in order to proceed. Page {page}
    of {page + Math.ceil(Math.log(page)) + 1}
</p>
<div>
    <input disabled placeholder="Your Legal Name" />
    <button class="accept-button" disabled>Accept</button>
</div>

<style>
    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    .warning {
        color: var(--del-color);
    }
    .accept-button {
        cursor: not-allowed !important;
    }
</style>
