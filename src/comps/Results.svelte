<script lang="ts">
    import type { ITrial, trials } from "src/store/store";
import { listen } from "svelte/internal";
import CipherRes from "./CipherRes.svelte";
import Codeinput from "./Codeinput.svelte";
    import CodeRes from "./CodeRes.svelte";
    export let solutions: ITrial[];
</script>

<table>
    <thead>
        <tr>
            <td>Try</td>
            <td>Code</td>
            <td>Solution</td>
        </tr>
    </thead>
    <tbody>
        {#each solutions as {trial, code, black, white} (trial)}
        <tr>
            <td>{trial}</td>
            <td><CipherRes numCodes={code}/></td>
            <td><CodeRes Color='black' repeats={black}/><CodeRes Color='white' repeats={white}/></td>
        </tr>
        {/each}
    </tbody>
</table>