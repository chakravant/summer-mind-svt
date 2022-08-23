<script lang="ts">
import { calcBg, calcFg } from "../utils/colors";

    import { createEventDispatcher } from "svelte";
    export let minCode = 1;
    export let maxCode = 6;

    const keys = new Array(maxCode - minCode + 1).fill(0).map((_, ix) => ix + minCode);
    let code: number[] = [];
    
    const dispatch = createEventDispatcher();
    function addKey(key: number) {
        code.push(key);
        code = code;
    }

    function removeKey() {
        code.pop();
        code = code;
    }

    function postCode() {
        dispatch('newCode', {code});
        code = [];
    }
</script>

<div class="sc">
    {#each keys as key (key)}
    <div 
        class='bt' 
        style="--bg-color: {calcBg(key)}; --tx-color: {calcFg(key)}"
        on:click={_ => addKey(key)}
    >{key}</div>
    {/each}
</div>
<div class="sc">
    {#each code as key, i (i)}
    <div 
        class='bt' 
        style="--bg-color: {calcBg(key)}; --tx-color: {calcFg(key)}"
    >{key}</div>
    {/each}
    <button on:click={removeKey} disabled={code.length === 0}>&lt;=</button>
    <button on:click={postCode} disabled={code.length !== 4}>Go!</button>
</div>

<script lang="ts" context="module">
    export interface CodeEvent {
        code: number[];
    }
</script>


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
    div.sc {
        margin-top: 10px;
    }
</style>