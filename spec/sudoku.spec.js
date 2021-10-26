const fs = require('fs');
const {
    ifelse,
    horizontalСheck,
    verticalСheck,
    blockCheck,
    solve,
    isSolved
  } = require('../sudoku.js');

  const {sudokuParse} = require('../runner.js');
  const textData = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');


describe('Решатель Судоку', () => {

  describe('Проверка на работу функций', () => {
    let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
    let arr = ifelse(str);
    it('правильную генерацию вложенных массивов', () => {
      expect(arr[0][0]).toBe('1');
      expect(arr[1][1]).toBe('9');
      expect(arr[8][7]).toBe('-');
    });
    
    it('достоверный поиск числа в столбце', () => {
      expect(verticalСheck(arr, 0, 4)).toEqual(undefined);
      expect(verticalСheck(arr, 2, 5)).toEqual(false);
      expect(verticalСheck(arr, 2, 6)).toEqual(undefined);
    });
    it('достоверный поиск числа в ряду', () => {
      expect(horizontalСheck(arr, 0, 4)).toEqual(undefined);
      expect(horizontalСheck(arr, 2, 5)).toEqual(undefined);
      expect(horizontalСheck(arr, 7, 4)).toEqual(false);
    });
    it('достоверный поиск числа в квадрате', () => {
      expect(blockCheck(arr, 0, 4, 3)).toEqual(true);
      expect(blockCheck(arr, 2, 5, 3)).toEqual(true);
      expect(blockCheck(arr, 7, 4, 3)).toEqual(false);
    });
  
  });

  describe('Проверка на решении всех Судоку', () => {

      it('Вернёт true, если 1 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 0);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 2 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 1);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);

      });

      it('Вернёт true, если 3 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 2);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 4 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 3);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 5 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 4);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 6 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 5);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 7 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 6);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 8 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 7);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 9 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 8);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 10 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 9);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 11 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 10);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 12 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 11);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 13 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 12);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 14 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 13);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });

      it('Вернёт true, если 15 Судоку решён правильно', () => {
        const strBoard = sudokuParse(textData, 14);
        const solveBoard = solve(strBoard);        
        expect(isSolved(solveBoard)).toEqual(true);
      });    
  });
});




