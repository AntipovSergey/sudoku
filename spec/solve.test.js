const sudoku = require("../sudoku")

describe("isInBlock", () => {
  const inp = [
    [1, null, 5, 8, null, 2, null, null, null],
    [null, 9, null, null, 7, 6, 4, null, 5],
    [2, null, null, 4, null, null, 8, 1, 9],
    [null, 1, 9, null, null, 7, 3, null, 6],
    [7, 6, 2, null, 8, 3, null, 9, null],
    [null, null, null, null, 6, 1, null, 5, null],
    [null, null, 7, 6, null, null, null, 3, null],
    [4, 3, null, null, 2, null, 5, null, 1],
    [6, null, null, 3, null, 8, 9, null, null],
  ];
  test('In block', () => {
    let result = sudoku.isInBlock(inp, 1, 0, 1)
    expect(result).toBe(true)
  })
  test('Not in block', () => {
    let result = sudoku.isInBlock(inp, 8, 0, 1)
    expect(result).toBe(false)
  })
})

describe("isInHorizontal", () => {
  const inp = [
    [1, null, 5, 8, null, 2, null, null, null],
    [null, 9, null, null, 7, 6, 4, null, 5],
    [2, null, null, 4, null, null, 8, 1, 9],
    [null, 1, 9, null, null, 7, 3, null, 6],
    [7, 6, 2, null, 8, 3, null, 9, null],
    [null, null, null, null, 6, 1, null, 5, null],
    [null, null, 7, 6, null, null, null, 3, null],
    [4, 3, null, null, 2, null, 5, null, 1],
    [6, null, null, 3, null, 8, 9, null, null],
  ];
  test('In horizontal', () => {
    let result = sudoku.isInHorizontal(inp, 8, 0, 1)
    expect(result).toBe(true)
  })
  test('Not in block', () => {
    let result = sudoku.isInHorizontal(inp, 1, 1, 2)
    expect(result).toBe(false)
  })
})

describe("isInVertical", () => {
  const inp = [
    [1, null, 5, 8, null, 2, null, null, null],
    [null, 9, null, null, 7, 6, 4, null, 5],
    [2, null, null, 4, null, null, 8, 1, 9],
    [null, 1, 9, null, null, 7, 3, null, 6],
    [7, 6, 2, null, 8, 3, null, 9, null],
    [null, null, null, null, 6, 1, null, 5, null],
    [null, null, 7, 6, null, null, null, 3, null],
    [4, 3, null, null, 2, null, 5, null, 1],
    [6, null, null, 3, null, 8, 9, null, null],
  ];
  test('In horizontal', () => {
    let result = sudoku.isInVertical(inp, 2, 0)
    expect(result).toBe(true)
  })
  test('Not in block', () => {
    let result = sudoku.isInVertical(inp, 3, 0)
    expect(result).toBe(false)
  })
})
