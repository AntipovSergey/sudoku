// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Принимает доску в виде строки в формате как
// вы видите в файле головоломки sudoku-puzzle. Возвращается
// что-то, представляющее собой доску после того,как
// ваш решатель попытался решить эту проблему.
// То, как вы представляете доску, зависит от вас!
//
// Функция `solve` в `sudoku.js` примет строку `String`,
// представляющую собой чистую доску Судоку.
// Неразрешенные квадраты отмечены символом ` - `.
// Решенные квадраты содержат в себе цифру от «1» до «9». Например:
//   `"1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--
//   2-5-16--3-89---"`

function solve(boardString) {
  console.log('first changes');
  const board = boardString.split('').reduce((acc, el, ind) => {
    const i = Math.trunc(ind / 9);
    if (acc[i] === undefined) acc[i] = [];
    acc[i].push(el);
    return acc;
  }, []);

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] !== '-') continue;
      const variants = [];
    }
  }
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// Возвращает логическое значение,определяющее, решено ли
// судоко.
// Доска ввода будет в любой
// форме, которую возвращает "решена".
//
function isSolved(board) {
  console.log('aaa');
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Обязательно напишите метод `prettyBoard`, который берет доску,
// записанную в строчку и возвращает отформатированный вариант,
// более привычный для нашего визуального восприятия. Например:

// ```
// 1 - 5 8 - 2 - - -
// - 9 - - 7 6 4 - 5
// 2 - - 4 - - 8 1 9
// - 1 9 - - 7 3 - 6
// 7 6 2 - 8 3 - 9 -
// - - - - 6 1 - 5 -
// - - 7 6 - - - 3 -
// 4 3 - - 2 - 5 - 1
// 6 - - 3 - 8 9 - -
// ```

function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
