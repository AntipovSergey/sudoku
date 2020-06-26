const { cub, column, solution } = require('../sudokuSolver')
const { valid } =require('../sudokuCheck')
const { read, parse } =require('../readFunc')


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
      expect(read).toEqual(jasmine.any(Function));
    });
    it('return Array', ()=> {
      let read1=read('sudoku-puzzles.txt')
      expect(read1).toEqual(jasmine.any(Array));
    });
    it('is a function', ()=> {
      expect(parse).toEqual(jasmine.any(Function));
    });
    it('return Array', ()=> {
      let parse1=parse(1)
      expect(parse1).toEqual(jasmine.any(Array));
    });
  });
  describe('test function validSolution', () => {
    it('is a function', ()=> {
      expect(valid).toEqual(jasmine.any(Function));
    });
  });
});


