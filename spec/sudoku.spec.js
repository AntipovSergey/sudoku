const { solve, isSolved, prettyBoard } = require('../sudoku.js');

describe('test', () => {
  const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  const newboard1 = [
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
    ['1', '1', '5', '8', '4', '2', '1', '1', '1'],
  ];
  const newboard2 = [
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ];

  describe('Array', () => {
    it('Array', () => {
      expect(Array.isArray(solve(boardString))).toBe(true);
    });
    it('Numbers', () => {
      for (let i = 0; i < 9; i++) {
        expect(solve(boardString)[i]).not.toContain('-');
      }
    });
  });
  // test('solve',() => {
  //   let str = '1-58-2'
  //   expect(solve(str)).toEqual(['1','-','5','8','-','2'])
  // })
});

describe('test2', () => {
  test('isolve', () => {
    let str = []
  })
})
