<script lang="ts">
    import type { ITrial } from "src/store/store";
    import CipherRes from "./CipherRes.svelte";
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

<style>
    table {
        margin-left: 16px;
    }
    table thead {
        font-size: large;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    table tbody tr td {
        font-size: x-large;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    td:nth-child(1) {
        width: 40px;
        text-align: center;
    }
    td:nth-child(2) {
        width: 200px;
        text-align: center;
    }
    td:nth-child(3) {
        width: 200px;
        text-align: center;
    }
</style>