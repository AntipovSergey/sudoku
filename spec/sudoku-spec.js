const { cub, column, solution } = require('../sudokuSolver')
const { valid } =require('../sudokuCheck')

describe('Test', () => {
  describe('Function', () => {
    it('is a function', () => {
      expect(cub).toEqual(jasmine.any(Function));
    });
    it('is a function', () => {
      expect(column).toEqual(jasmine.any(Function));
    });
    it('is a function', () => {
      expect(solution).toEqual(jasmine.any(Function));
    });
  });
  describe('test function validSolution', () => {
    it('is a function', ()=> {
      expect(valid).toEqual(jasmine.any(Function));
    });
  });
});


