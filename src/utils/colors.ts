export function calcBg(code: number) {
    switch(code) {
        case 1: return 'red';
        case 2: return 'green';
        case 3: return 'blue';
        case 4: return 'gray';
        case 5: return 'black';
        case 6: return 'olive';
        case 7: return 'pink';
        case 8: return 'navy';
        case 9: return 'yellow';
        case 0: return 'white';
    }
}

export function calcFg(code: number) {
    switch(code) {
        case 1: return 'black';
        case 2: return 'black';
        case 3: return 'white';
        case 4: return 'black';
        case 5: return 'white';
        case 6: return 'black';
        case 7: return 'black';
        case 8: return 'black';
        case 9: return 'black';
        case 0: return 'black';
    }
}
