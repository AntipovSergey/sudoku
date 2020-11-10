let table = document.querySelector('.table1');
let puzzle = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let button = document.querySelector('.button2');

function fillStart(table, puzzle) {
  let arrayCeils = table.querySelectorAll('td');
  for (let i = 0; i < puzzle.length; i += 1) {
    arrayCeils[i].innerText = puzzle[i];
  }
  // console.log(arrayCeils);
}

function solve(puzzle) {
  let board = stringToArr(puzzle);
  solveSolve(board);
  let pretty = '';
  for (let i = 0; i < board.length; i += 1) {
    let string = board[i].join('');
    pretty = pretty + string;
  }
  return pretty;
}

function solveSolve(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let def = 0; def < board[i].length; def += 1) {
      if (board[i][def] == '-') {
        for (let k = 1; k <= 9; k += 1) {
          if (comparisonSquare(board, i, def, k)) {
            board[i][def] = String(k);
            if (solveSolve(board)) {
              return board;
            } else {
              board[i][def] = '-';
            }
          }

        }
        return false;
      }
    }
  }
  return board;
}

function comparisonSquare(board, i, j, num) {
  for (let row = 0; row < 9; row += 1) {
    // координаты бокса
    const m = 3 * parseInt(i / 3) + parseInt(row / 3);
    const n = 3 * parseInt(j / 3) + (row % 3);
    if (board[i][row] == num || board[row][j] == num || board[m][n] == num) {
      return false;
    }
  }
  return true;
}

function stringToArr(string) {

  let b = string.split("");
  // console.log(b);
  const arr = [];
  for (i = 0; i < b.length; i += 9) {
    arr.push(b.slice(i, i + 9));

  }
  return arr;
}

fillStart(table, puzzle);

button.addEventListener('click', () => {
  let result = solve(puzzle);
  let table2 = document.querySelector('.table2');
  fillStart(table2, result);
})
