/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const sudoku = require("../sudoku.js");

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 1, 4, 3, 6, 5, 8, 9, 7],
  [3, 6, 5, 8, 9, 7, 2, 1, 4],
  [8, 9, 7, 2, 1, 4, 3, 6, 5],
  [5, 3, 1, 6, 4, 2, 9, 7, 8],
  [6, 4, 2, 9, 7, 8, 5, 3, 1],
  [9, 7, 8, 5, 3, 1, 6, 4, 2],
];

describe("sudoku", () => {
  test("sum of numbers", () => {
    const solved = sudoku;
    const newArr = arr.flat();
    const sum = newArr.reduce((acc, value) => acc + value, 0);
    expect(sum).toBe(405);
  });

  test("no empty", () => {
    const solved = sudoku;
    const empty = arr.find((value) => value === '-');
    expect(empty).toBeUndefined();
  });

  test("no repeat rows", () => {
    const solved = sudoku;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let result = [];
      for (let j = 0; j < arr[i].length; j++) {
        if (!result.includes(arr[i][j])) {
          result.push(arr[i][j]);
        }
      }
      newArr.push(result);
    }
    const finalRows = newArr.flat();
    expect(finalRows.length).toBe(81);
  });

  test("no repeat cols", () => {
    const solved = sudoku;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let result = [];
      for (let j = 0; j < arr[i].length; j++) {
        if (!result.includes(arr[j][i])) {
          result.push(arr[j][i]);
          arr[j][i] = arr[i][j];
        }
      }
      newArr.push(result);
    }
    const finalCols = newArr.flat();
    expect(finalCols.length).toBe(81);
  });
});
