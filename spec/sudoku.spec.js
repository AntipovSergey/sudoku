/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { solve } = require("../sudoku.js");

const str =
  "---------------------------------------------------------------------------------";
const arr = solve(str);

describe("sudoku", () => {
  test("sum of numbers", () => {
    const newArr = arr.flat();
    const sum = newArr.reduce((acc, value) => acc + +value, 0);
    expect(sum).toBe(405);
  });

  test("no empty", () => {
    const empty = arr.find((value) => +value === "-");
    expect(empty).toBeUndefined();
  });

  test("no repeat rows", () => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let result = [];
      for (let j = 0; j < arr[i].length; j++) {
        if (!result.includes(arr[i][j])) {
          result.push(+arr[i][j]);
        }
      }
      newArr.push(result);
    }
    const finalRows = newArr.flat();
    expect(finalRows.length).toBe(81);
  });

  test("no repeat cols", () => {
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
