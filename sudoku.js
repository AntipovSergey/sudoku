/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
//  let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function solve(boardString) {
<<<<<<< HEAD
  const arr = boardString.split('');
  const sudokuBoard = [];
  for (let i = 0; i < arr.length; i += 9) {
    sudokuBoard.push(arr.slice(i, i + 9));
  }

  console.log(console.table(sudokuBoard));
}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
=======
  console.log('======>', boardString)
  let arr = boardString.split('');
  let sudokuBoard = [];
  for (let i = 0; i < arr.length; i += 9) {
    sudokuBoard.push(arr.slice(i, i + 9))
  }



  return sudokuBoard;
}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')

function findEmpty(sudokuBoard) {

  for (let r = 0; r < sudokuBoard.length; r += 1) {
    for (let c = 0; c < sudokuBoard.length; c += 1) {
      if (sudokuBoard[r][c] === '-') {
        return [r, c]
      }
    }
  }
  return null;
}



console.log(findEmpty(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')))

// console.log(solve())

/* function findEmpty(sudokuBoard) {

  for (let r = 0; r < sudokuBoard.length; r += 1) {
    for (let c = 0; c < sudokuBoard.length; c += 1) {
      if (sudokuBoard[r][c] === '-') {
        return [r, c]
      }
    }
  }
  return null;
} */
// console.log(findEmpty(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')))

>>>>>>> 4dfcdbb567cfbb8c08d8c915942c7e1af0c3501a

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

