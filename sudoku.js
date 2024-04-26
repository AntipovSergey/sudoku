const fs = require('fs');

function read() {
  const result = [];
  const getTxt = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n');

  const row = getTxt[process.argv[2] || 0].split('');

  for (let i = 0; i < 9; i += 1) {
    result.push(row.splice(0, 9));
  }

  return result;
}

function solve() {
  const sudoku = read();
  let solved = false;

  function fill(row, col) {
    if (row === 9) {
      solved = true;
      return;
    }

    if (sudoku[row][col] !== '-') {
      if (col === 8) fill(row + 1, 0);
      else fill(row, col + 1);
    } else {
      for (let num = 1; num <= 9; num += 1) {
        if (isSolved(row, col, num)) {
          sudoku[row][col] = num;
          if (col === 8) fill(row + 1, 0);
          else fill(row, col + 1);
          if (!solved) sudoku[row][col] = '-';
        }
      }
    }
  }

  function isSolved(row, col, num) {
    for (let i = 0; i < 9; i += 1) {
      if (sudoku[row][i] === num) return false;
      if (sudoku[i][col] === num) return false;
    }

    const boxRow = Math.floor(row / 3);
    const boxCol = Math.floor(col / 3);

    for (let i = boxRow * 3; i < boxRow * 3 + 3; i += 1) {
      for (let j = boxCol * 3; j < boxCol * 3 + 3; j += 1) {
        if (sudoku[i][j] === num) return false;
      }
    }

    return true;
  }

  fill(0, 0);
  return sudoku;
}

function prettyBoard(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 3 === 0 && i !== 0) {
      console.log('---------------------');
    }

    let row = '';
    for (let j = 0; j < arr[i].length; j += 1) {
      if (j % 3 === 0 && j !== 0) {
        row += '| ';
      }
      row += `${arr[i][j]} `;
    }
    console.log(row.trim());
  }
}

const sud = solve();

console.log(prettyBoard(sud));
