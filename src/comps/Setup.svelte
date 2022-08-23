<script lang="ts">
    import { startGame } from "../store/game";
    import { settings, screen } from "../store/store";
    
    let set_max = 6;
    let set_diff = 1;
    let set_rep = true;
    
    function start() {
        const max = set_max;
        const min = max < 9 ? 1 : 0;
        const tries = 11 - set_diff;
        const st = { min, max, tries, repetitions: set_rep };
        $settings = st;
        startGame(st);
        $screen = "GAME";
    }
</script>
<h1>MASTERMIND</h1>
<h2>Game settings</h2>
<div>
    <p><label>Max number of codes (6-9)<input type="number" max="9" min="6" value={set_max}/></label></p>
    <p><label>Difficulty (1-5)<input type="number" max="5" min="1" value={set_diff}/></label></p>
    <p><label><input type="checkbox" value={set_rep}/> Repetitions allowed</label></p>
    <button on:click={start}>Start</button>
</div>