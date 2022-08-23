<script type="ts">
import { calcBg, calcFg } from "../utils/colors";
    export let numCodes: number[];
</script>

{#each numCodes as code}
<div class='bt' style="--bg-color: {calcBg(code)}; --tx-color: {calcFg(code)}">{code}</div>
{/each}

<style>
    div.bt {
        display: inline-block;
        text-align: center;
        width: 20px;
        height: 20px;
        border: black thin solid;
        border-radius: 15px;
        margin-left: 5px;
        background-color: var(--bg-color);
        color: var(--tx-color);
    }
</style>