// Функция создания массива судоку

function arrBoard(puzzle) {
  const board = [];

  let end = 9;
  for (i = 0; i < 81; i += 9) {
    const arr = puzzle.slice(i, end).split('');
    board.push(arr);
    end += 9;
  }
  return board;
}

// Алгоритм решения судоку
function solve(boardString) {
  
}

// Проверка результата работы функции solve
function isSolved(board) {

}

// Функция вывода строки в стандартный вид(не массив)
function prettyBoard(board) {
  return board.forEach((element) => {
    console.log(element.join(' '));
  });
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
