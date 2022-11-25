/* eslint-disable no-undef */
const sudoku = require("../sudoku.js");

describe('Basic tests', () => {
  it('Does the function return an array?', () => {
    expect(typeof solve(board)).toEqual('array');
  });
});
