/* eslint-disable max-len */
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const sudokuBoard = boardString.split('').map((el) => Number(el) ? Number(el) : null); // Превращение строки в массив с заменой всех 'не чисел' на null
  const sudokuArr = [];
  const transudokuArr = [[], [], [], [], [], [], [], [], []];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (boardString.length > 81) return 'Неправильный формат судоку';

  for (let i = 0; i < boardString.length; i += 9) {  // Распределение строки по 9 символов (цифры и не только)
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }
  for (let i = 0; i < sudokuArr.length; i += 1) {  // Проверка 'строк' на заполненость
    if (sudokuArr[i].reduce((acc, el) => acc + Number(el)) === 45) {
      continue;
    }
    else {
      const indexes = sudokuArr[i].map((x, i) => x === null ? i : -1).filter(x => x >= 0); // [[ 1, null, 2, null,7, null, null, 4,6], [null, 9, null, 1, 6, null, null, 3, null],]
      const numbersArr = sudokuArr[i].filter(x => )
      }
    }
    return sudokuArr;
  }

  for (let i = 0; i < sudokuArr.length; i++) {  // Транспонирование матрицы , для проверки ее 'столбов'
    for (let j = 0; j < sudokuArr[i].length; j++) {
      transudokuArr[i].push(sudokuArr[j][i])
    }
  }

  for (let i = 0; i < transudokuArr.length; i += 1) { // Проверка 'столбцов' на заполненость
    let countLength = 0;
    if (transudokuArr[i].reduce((acc, el) => acc + Number(el)) === 45) {
      continue;
    }
    else {
      (transudokuArr[i].filter((el) => Number(el) );
    }
  }
  return transudokuArr;
}

console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  const sudokuBoard = board.split('').map((el) => Number(el) ? Number(el) : null);
  const sudokuArr = [];
  if (board.length > 81) return "Неправильный формат судоку"

  for (let i = 0; i < board.length; i += 9) {
    sudokuArr.push(sudokuBoard.slice(i, i + 9));
  }
  return sudokuArr;
}
// console.table(prettyBoard('123456789fffffffffzzzzzzzzzooooooooojjjjjjjjjnnnnnnnnnmmmmmmmmmlllllllllkkkkkkkkk'))

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}



// sudokuBoard.push( board[i].split('').flatMap(x => [[x]]) );
    // if (i < 8) {
    //   sudokuBoard[0].push(board[i]);
    // }
    // if (i > 8 && i < 16) {
    //   sudokuBoard[1].push(board[i]);
    // }
    // if (i > 16 && i < 24) {
    //   sudokuBoard[2].push(board[i]);
    // }
    // if (i > 24 && i < 32) {
    //   sudokuBoard[3].push(board[i]);
    // }
    // if (i > 32 && i < 40) {
    //   sudokuBoard[4].push(board[i]);
    // }
    // if (i > 40 && i < 42) {
    //   sudokuBoard[3].push(board[i]);
    // }

  // }
