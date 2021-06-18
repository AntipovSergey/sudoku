
function solve(boardString) {
  let board = []; 
  let newStr = boardString.replace(/\-/g, 0);
  while (newStr.length) {
    board.push(Array.from(newStr.substring(0, 9)));
    newStr = newStr.substring(9);
  }
  return board;
}
//проверка:
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
console.table(solve(str));
