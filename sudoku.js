// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Custom function: delete item from array
function removeItem(arr, value) {
  return arr.filter((ele) => ele != value);
}

function solve(boardString) {
  console.log('first changes');

  // Convert string into array[array of numbers]
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(boardString.replaceAll('-', 0).slice(i, i + 9).split('').map(Number));
  }
  console.table(board);
  //   console.log(board);

//   return board;
  return runner(board);
}


// console.log(solve(boardString));


function checkString(board, x, y) {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    for (let rowI = 0; rowI < 9; rowI++) {
      if (options.includes(board[x][rowI])) {
        options = removeItem(options, board[x][rowI]);
      }
    }
  }
  if (options.length === 1) board[x][y] = [...options];

//   return checkVertical(board, x, y, options);
}

// Runner
function runner(board) {
    for ( let y = 0; y < board.length; y++) {
        for (let x = 0; x <board.length; x++) {
            if (board[y][x] === 0) {
                console.log(board[y][x]);
                return checkString(board, x, y);
            }
        }
    }
}
// console.log(runner(solve(boardString)));




// Функция принимает на вход "готовую" доску, 
// индекс "пустого" элемента и оставшиеся
// возможные варианты для этого места.
// В процессе проверки, вычитает из массива возможных вариантов те цифры, что есть уже по вертикали.
// На выход, ессли остался только один возможные вариант,
// тогда возвращает доску и заново запускает runner().
// Если остался массив возможных вариантов, вызывает поиск по группам и 
// отдает доску, индексы и оставшиеся возможные варианты.
// function checkVertical(board, indX, indY, options){
//   for (y = 0; y < board.length; y += 1){
//       let newOptions = options.map((el) => {})
//       if (options.length === 1) {
//         board[indY][indX] = options[0]
//       }
//   }
// }
// const board = solve(boardString);

const board = [
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
];


function groupCheck(board, indexRow, indexColumn, options) {
  let total = 0;
  const row = Math.floor(indexRow / 3) * 3; // старт строки
  console.log(row);
  const colomn = Math.floor(indexColumn / 3) * 3; // старт столбца
  console.log(colomn);
  const endRow = row + 3; // старт строки
  console.log(endRow);
  const endColomn = colomn + 3; // старт столбца
  console.log(endColomn);
  for (let yy = colomn; yy < endColomn; yy += 1) { // цикл проверки первого ряда в группе
    for (let xx = row; xx < endRow; xx += 1) {
      if (board[yy][xx] === options) total ++
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
}
console.log(groupCheck(board, 2, 7, [1, 3]));

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

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
//   groupCheck,
};
