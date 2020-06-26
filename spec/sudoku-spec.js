const {cub} = require('../sudokuSolver')

describe('Test', () => {
  describe('Function', () => {
    it('is a function', () => {
      expect(cub).toEqual(jasmine.any(Function));
    });
  })
});


