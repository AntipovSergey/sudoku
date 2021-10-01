const {
  getBoard,
  getPossibleNumsInSquare,

} = require('../utils.js');

describe('check square', () => {
  let board;
  const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  beforeEach(() => {
    board = getBoard(str);
  });
  it('has to return right answer', () => {
    expect(getPossibleNumsInSquare(board, 1, 1))
      .toEqual(expect.arrayContaining([3, 4, 6, 7, 8]));
  });
  it('has to return right answer', () => {
    expect(getPossibleNumsInSquare(board, 1, 1))
      .not.toEqual(expect.arrayContaining([2]));
  });
});
