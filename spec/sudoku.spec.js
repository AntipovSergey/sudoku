const fs = require("fs");
const sudoku = require("../sudoku.js");

describe("Проверка решения судоку из файла: '../sudoku-puzzles.txt'", () => {
  const sudokuTasksFilePath = "./sudoku-puzzles.txt";
  const sudokuTasks = fs.readFileSync(sudokuTasksFilePath, "utf-8").split("\n");
  describe("Первый уровень сложности", () => {
    for (let i = 0; i < 5; ++i) {
      const sudokuTask = sudokuTasks[i];
      test(`Задача 1.${i + 1}: ${sudokuTask}`, () => {
        expect(sudoku.isSolved(sudoku.solve(sudokuTask))).toBe(true);
      });
    }
  });
  describe("Второй уровень сложности", () => {
    for (let i = 5; i < 10; ++i) {
      const sudokuTask = sudokuTasks[i];
      test(`Задача 2.${i - 4}: ${sudokuTask}`, () => {
        expect(sudoku.isSolved(sudoku.solve(sudokuTask))).toBe(true);
    });
    }
  });
  describe("Последний уровень сложности", () => {
    for (let i = 10; i < 15; ++i) {
      const sudokuTask = sudokuTasks[i];
      test(`Задача 3.${i - 9}: ${sudokuTask}`, () => {
        expect(sudoku.isSolved(sudoku.solve(sudokuTask))).toBe(true);
      });
    }
  });
});