import { random_seq, calculate } from '../lib/master';
import { secret, trials, type ISettings } from './store';

export function startGame({max, min, repetitions}: ISettings) {
    secret.update(_ => random_seq(4, max, min, repetitions));
}

export function makeMove(code: number[], secret: number[]) {
    trials.update(curr => {
        const {hits, miss} = calculate(secret, code);
        return [...curr, {trial: curr.length +1, black: hits, white: miss, code}];
    });
}