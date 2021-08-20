const sudoku = require('../sudoku.js')


describe('Проверка вывода', () => {
  describe('Вариант судоку 1', () => {
    it('текст раз', () => {
      const sudokuStr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
      const sudokuArr = [];
      for (let i = 0; i < 8; i++) {
        sudokuArr.push(sudokuStr.slice(i, i + 9).split(''));
      }
      const result = `1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -`;
      expect(sudoku.prettyBoard(sudokuStr)).toEqual(result);
      expect(binarySearchRefact(elem, arr)).toEqual(6);
    });
    it('текст два', () => {
      const elem = 'X';
      expect(binarySearch(elem, arr)).toEqual(-1);
      expect(binarySearchRefact(elem, arr)).toEqual(-1);
    });
    it('текст три', () => {
      const elem = 'B';
      expect(binarySearch(elem, arr)).toEqual(1);
      expect(binarySearchRefact(elem, arr)).toEqual(1);
    });
  });
  describe('Числа', () => {
    let arrNum = [];
    beforeEach(() => {
      const arr1 = [];
      for (let i = 0; i < 100; i++) {
        arr1.push(i);
      }
      arrNum = arr1.slice();
    });
    it('Числа раз', () => {
      const elem = 5;
      expect(binarySearch(elem, arrNum)).toEqual(5);
      expect(binarySearchRefact(elem, arrNum)).toEqual(5);
    });
    it('Числа два', () => {
      const elem = 100;
      expect(binarySearch(elem, arrNum)).toEqual(-1);
      expect(binarySearchRefact(elem, arrNum)).toEqual(-1);
    });
    it('Числа три', () => {
      const elem = 80;
      expect(binarySearch(elem, arrNum)).toEqual(80);
      expect(binarySearchRefact(elem, arrNum)).toEqual(80);
    });
  });
});
