<script type="ts">
    export let Color: string = 'white';
    export let repeats: number = 0;
    let keys: number[] = [];
    $: keys = new Array(repeats).fill(0).map((_, inx) => inx);
</script>

{#each keys as key}
<div class='bt' style="--bg-color: {Color}"></div>
{/each}

<style>
    div.bt {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: black thin solid;
        border-radius: 15px;
        margin-left: 5px;
        background-color: var(--bg-color);
    }
</style>