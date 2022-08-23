<script lang="ts">
    import {trials, settings, secret, state, screen} from "../store/store";
    import {makeMove} from '../store/game';
    import Codeinput from "./Codeinput.svelte";
    import type { CodeEvent } from "./Codeinput.svelte";
    import Results from "./Results.svelte";
    
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
<Codeinput on:newCode={postCode} maxCode={$settings.max} minCode={$settings.min}/>
{:else}
<button on:click={resetGame}>AGAIN</button>
{/if}
<h2>Results</h2>
<Results solutions={$trials}/>
{#if $state === 'FAILED'}
    <div class="fail">
        Sorry, max number of tries exceeded. The code is: {$secret.join(",")}
    </div>
{:else if $state === 'SUCCEED'}
    <div class="win">
        You guessed right
    </div>
{/if}