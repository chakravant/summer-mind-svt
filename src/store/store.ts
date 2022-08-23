import { derived, writable, type Readable } from "svelte/store";


export interface ISettings {
    max: number;
    min: number;
    repetitions: boolean;
    tries: number;
}

export interface ITrial {
    trial: number;
    code: number[];
    black: number;
    white: number;
}

export type State = 'FAILED' | 'SUCCEED' | 'RUNNING';
export type Screen = 'SETUP' | 'GAME';

export const settings = writable<ISettings>({max: 6, min: 1, repetitions: true, tries: 10});
export const trials = writable<ITrial[]>([]);
export const secret = writable<number[]>([]);
export const screen = writable<Screen>('SETUP');

export const state: Readable<State> = derived([trials, settings], stores => {
    const [list, settings] = stores;
    if (list.length >= settings.tries) {
        return 'FAILED';
    } else if (list.length > 0 && list.at(-1).black === 4) {
        return 'SUCCEED';
    } else {
        return 'RUNNING';
    }
});
