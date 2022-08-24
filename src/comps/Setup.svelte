<script lang="ts">
    import { startGame } from "../store/game";
    import { settings, screen } from "../store/store";
    
    let set_max = 6;
    let set_diff = 1;
    let set_rep = true;
    let is_legal = true;

    $: set_rep = set_max < 8;
    $: set_diff = set_max < 8 ? set_diff : 1;
    $: is_legal = set_max > 5 && set_max < 11 && set_diff > 0 && set_diff < 6;
    
    function start() {
        const max = set_max < 10 ? set_max : 9;
        const min = set_max < 10 ? 1 : 0;
        const tries = 11 - set_diff;
        const st = { min, max, tries, repetitions: set_rep };
        $settings = st;
        startGame(st);
        $screen = "GAME";
    }
</script>

<h1>MASTERMIND</h1>
<h2>Game settings</h2>
<div class="config">
    <p><label>Max number of codes (6-10)<input type="number" max="10" min="6" bind:value={set_max}/></label></p>
    <p><label>Difficulty (1-5)<input type="number" max="5" min="1" bind:value={set_diff}/></label></p>
    <p><label><input type="checkbox" bind:checked={set_rep}/> Repetitions allowed</label></p>
    <button on:click={start} disabled={!is_legal}>Start</button>
</div>

<style>
    h1 {
        background-color: navy;
        color: white;
        text-align: center;
        margin: 0;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
    }

    h2 {
        color: darkgray;
        text-align: center;
        margin: 0;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
    }

    div.config {
        display: inline-block;
        margin: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
    }

    div.config p label {
        display: block;
        font-size: x-large;
        margin:8px;
    }

    div.config p label input {
        display: block;
        font-size: x-large;
        border-style: none none solid none;
        margin-top: 8px;
        width: 100%;
    }

    div.config p label input[type=checkbox] {
        display: inline-block;
        height: 24px;
        width: 24px;
        border-style: none none solid none;
        margin-top: 8px;
    }

    div.config button {
        display: block;
        background-color: navy;
        border: thin solid navy;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        color: white;
        width: 100%;
        padding: 16px;
    }

    div.config button:disabled {
        background-color: gray !important;
    }

</style>