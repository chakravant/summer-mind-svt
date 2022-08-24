<script lang="ts">
    import {trials, settings, secret, state, screen} from "../store/store";
    import {makeMove} from '../store/game';
    import CodeInput from "./CodeInput.svelte";
    import type { CodeEvent } from "./CodeInput.svelte";
    import Results from "./Results.svelte";
import CodeRes from "./CodeRes.svelte";
import CipherRes from "./CipherRes.svelte";
    
    function postCode({detail} : {detail: CodeEvent}) {
        makeMove(detail.code, $secret);
    }

    function resetGame() {
        secret.set([]);
        trials.set([]);
        screen.set('SETUP');
    }
</script>

<h1>MASTERMIND</h1>
{#if $state === 'RUNNING'}
<h2>Try your skill</h2>
<CodeInput on:newCode={postCode} maxCode={$settings.max} minCode={$settings.min}/>
{:else}
<button on:click={resetGame} class="tryagain">AGAIN</button>
{/if}
<h2>Results</h2>
<div class="container">
<Results solutions={$trials}/>
{#if $state === 'FAILED'}
    <div class="fail">
        Sorry, max number of tries exceeded. The code is: 
        <div><CipherRes numCodes={$secret} /></div>
    </div>
{:else if $state === 'SUCCEED'}
    <div class="win">
        You guessed right
    </div>
{/if}
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

    div.container {
        position: relative;
    }

    div.container div.win {
        position: absolute;
        top: 30%;
        left: 70px;
        background-color: aliceblue;
        border: thin solid blueviolet;
        text-align: center;
        margin: 0;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        color: navy;
    }

    div.container div.fail {
        position: absolute;
        top: 30%;
        left: 40px;
        background-color: aliceblue;
        border: thin solid red;
        text-align: center;
        margin: 0;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        color: darkred;
    }

    button.tryagain {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        margin: 15px 5px 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: darkred;
        color: white;
        width: 98%;
    }

</style>