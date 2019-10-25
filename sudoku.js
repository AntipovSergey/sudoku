// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Принимает доску в виде строки в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель попытался ее решить.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {

}

function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// Возвращает логическое значение, указывающее,
// или предоставленная плата не решена.
// Панель ввода будет в любом
// форма `решить` возвращает.
function isSolved(board) {

}

function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

// / Принимает в доске в некоторой форме и
// возвращает строку, которая хорошо отформатирована
// для вывода на экран.
// Панель ввода будет в любом
// форма `решить` возвращает.
function prettyBoard(board) {
  let stringBoard =
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
  board = stringBoard.split("");
  let mass = [];
  for (let i = 0; i < 9; i++) {
    mass[i] = board.splice(0, 9);
  }
  return mass;
}
console.log(
  prettyBoard(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);

module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
};
