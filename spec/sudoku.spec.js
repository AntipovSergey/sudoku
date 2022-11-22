const { isSolved } = require('../sudoku.js');

describe('isSolved', () => {
  let sudokuString;
  beforeEach(() => {
    sudokuString = '123456789123456789123456789123456789123456789123456789123456789123456789123456789';
  });
  it('проверка всех чисел на количество и отсутвие тире', () => {
    expect(isSolved(sudokuString)).toEqual(true);
  });
  it('проверка на наличие тире', () => {
    const str = '-12345678912345-6789123456789123456789123456789123456789123456789123456789123456789';
    expect(isSolved(str)).toEqual(false);
  });
  it('количесто каждого числа должно быть 9', () => {
    const strNum = '1234567891234567891234567891234567891234567891234567891234567891234567891';
    expect(isSolved(strNum)).toEqual(false);
  });
});
