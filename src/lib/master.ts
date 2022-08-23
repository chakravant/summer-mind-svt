function rnd(max: number, min = 1) {
  return Math.floor(Math.random() * max) + min;
}

export function rand(max: number, min = 1, not_in: number[] | undefined = undefined): number {
  do {
    const x = rnd(max, min);
    if (not_in === undefined || not_in.indexOf(x) === -1) {
      return x;
    }
  } while (true);
}

export function random_seq(len: number, max: number, min = 1, repeat = true) {
  const qs: number[] = [];
  for (let i = 0; i < len; i += 1) {
    const ql = rand(max, min, repeat ? undefined : qs);
    qs.push(ql);
  }
  return qs;
}

function calculate_black(code: number[], answer: number[]) {
  const ans = new Array(code.length);
  let blk = 0;
  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === answer[i]) {
      ans[i] = undefined;
      blk += 1;
    } else {
      ans[i] = code[i];
    }
  }

  return {hits: blk, rest: ans};
}

function remove(arr: number[], elem: number) {
  const ix = arr.indexOf(elem);
  if (ix !== -1) {
    arr[ix] = undefined;
    return elem;
  }

  return undefined;
}

function calculate_white(mcode: number[], ans: number[]) {
  let wh = 0;
  const nmcode = mcode.slice();
  for (let i = 0; i < 4; i += 1) {
    if (mcode[i] === undefined) continue;
    const ix = remove(nmcode, ans[i]);
    if (ix === ans[i]) {
      wh++;
    }
  }

  return wh;
}

export interface IAnswer {
  hits: number;
  miss: number;
}

export function calculate(code: number[], answer: number[]): IAnswer {
  const {hits, rest} = calculate_black(code, answer);
  const miss = calculate_white(rest, answer);
  return {hits, miss};
}
