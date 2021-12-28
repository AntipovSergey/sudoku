const fs = require('fs');
const {
  f0,
  f2,
  f3,
  f4,
} = require('../sudoku');

const {
  sudokuParse,
} = require('../runner');

describe('check functions', () => {
  let str;
  let arr = [];
  beforeEach(() => {
    str = fs.readFileSync(
      './sudoku-puzzles.txt',
      'utf-8',
    );
    arr = f0(sudokuParse(str, 0));
  });

  it('test f0', () => {
    expect(arr.length).toEqual(9);
    expect(arr[3].length).toEqual(9);
  });
  it('test f2', () => {
    expect(f2(0, 1, arr)).toEqual([4, 7]);
    expect(f2(2, 4, arr)).toEqual([3, 5]);
    expect(f2(2, 1, arr)).toEqual([5, 7]);
  });
  it('test f3', () => {
    expect(f3(0, 1, arr)).toEqual([3, 4, 6, 7, 8]);
    expect(f3(2, 4, arr)).toEqual([1, 3, 5, 9]);
    expect(f3(2, 1, arr)).toEqual([3, 4, 6, 7, 8]);
  });
  it('test f4', () => {
    expect(f4([4, 7], [1, 2, 3, 4, 8, 7])).toEqual([4, 7]);
    expect(f4([3], [4, 6, 3])).toEqual([3]);
    expect(f4([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(f4(f3(0, 1, arr), f2(0, 1, arr))).toEqual([4, 7]);
  });
});
