<script lang="ts">
import { calcBg, calcFg } from "../utils/colors";

    import { createEventDispatcher } from "svelte";
    export let minCode = 1;
    export let maxCode = 6;

    const keys = new Array(maxCode - minCode + 1).fill(0).map((_, ix) => ix + minCode);
    let code: number[] = [];
    
    const dispatch = createEventDispatcher();
    function addKey(key: number) {
        if (code.length < 4) {
            code.push(key);
            code = code;
        }
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

<div class="container">
<div class="sc" class:disabled={code.length >=4}>
    {#each keys as key (key)}
    <div 
        class='bt click' 
        style="--bg-color: {calcBg(key)}; --tx-color: {calcFg(key)}"
        on:click={_ => addKey(key)}
    ></div>
    {/each}
</div>
<div class="sc">
    {#each code as key, i (i)}
    <div 
        class='bt' 
        style="--bg-color: {calcBg(key)}; --tx-color: {calcFg(key)}"
    ></div>
    {/each}
    <button on:click={removeKey} disabled={code.length === 0} class="ltbutton">&lt;</button>
    <button on:click={postCode} disabled={code.length !== 4} class="gobutton">Go!</button>
</div>
</div>

<script lang="ts" context="module">
    export interface CodeEvent {
        code: number[];
    }
</script>


<style>
    div.container {
        display: inline-block;
    }

    div.click {
        cursor: crosshair;
    }

    div.bt {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        border: black thin solid;
        border-radius: 15px;
        margin-left: 5px;
        background-color: var(--bg-color);
        color: var(--tx-color);
        margin-right: 8px;
    }

    div.sc.disabled div.bt {
        background-color: gray !important;
        cursor: pointer !important;
    }

    div.sc {
        margin-top: 10px;
    }

    div.sc button.ltbutton {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        border: black thin solid;
        border-radius: 15px;
        margin-left: 5px;
        background-color: black;
        color: white;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
    }
    div.sc button.ltbutton:disabled {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        border: black thin solid;
        border-radius: 15px;
        margin-left: 5px;
        background-color: white;
        color: gray;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
    }

    div.sc button.gobutton {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        margin: 15px 5px 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: navy;
        color: white;
        width: 98%;
    }

    div.sc button.gobutton:disabled {
        color: white;
        border: none;
        background-color: white;
    }
</style>