// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель пытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.

let board =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(board) {
  let arr = new Array(9);
  let char = 0;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = [];
    for (let i = 0; i < 9; i++) {
      if (board[char] != '-') {
        arr[index].push(board[char]);
      } else {
        arr[index].push('.');
      }
      char++;
    }
  }
  return arr;
}
console.log(prettyBoard(board));

Exports all the functions to use them in another file.
Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
