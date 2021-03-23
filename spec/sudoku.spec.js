const {solve, isSolved, prettyBoard} = require('../sudoku.js')

describe('Solving Sudoku', () => {
  describe('solving', () => {}
  )
let str='1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
it('return solved sudoku', () => {
  const check = solve(str);
  expect(check.join()).toBe('1,4,5,8,9,2,6,7,3,8,9,3,1,7,6,4,2,5,2,7,6,4,3,5,8,1,9,5,1,9,2,4,7,3,8,6,7,6,2,5,8,3,1,9,4,3,8,4,9,6,1,7,5,2,9,5,7,6,1,4,2,3,8,4,3,8,7,2,9,5,6,1,6,2,1,3,5,8,9,4,7')
});
let str2='1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--';
it('throw erorr if str2 length less then 81', () => {
  expect(() => {
    solve(str2)}
  ).toThrow('Invalid Input')
});

})

