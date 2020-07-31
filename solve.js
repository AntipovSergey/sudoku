let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(str) {
  let a = 0
  let b = 9
  let board = [];
  for(let i = 0; i < 9; i++) {
    board.push(str.slice(a,b).split(''))
    a += 9
    b += 9
  }
  return board
}

console.log(solve(str));
