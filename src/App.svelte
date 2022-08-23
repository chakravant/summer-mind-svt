<script lang="ts">
    import { screen } from "./store/store";
    import Setup from "./comps/Setup.svelte";
    import Game from "./comps/Game.svelte";

</script>
{#if $screen === 'SETUP'}
    <Setup />
{:else}
    <Game />
{/if}


