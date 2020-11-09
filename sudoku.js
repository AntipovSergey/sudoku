function solve(puzzle) {
  function solveRow(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (typeof arr[i][j] === 'string') {
          if (arr[i][j] === '') {
            arr[i][j] = '123456789';
          }
          for (let k = 0; k < 9; k++) {
            if (arr[i][j].includes(arr[i][k]) && j !== k && !isNaN(arr[i][k])) {
              let index = arr[i][j].indexOf(arr[i][k]);
              arr[i][j] =
                arr[i][j].slice(0, index) +
                arr[i][j].slice(index + 1, arr[i][j].length);
            }
          }
        }
        if (arr[i][j].length == 1) {
          arr[i][j] = +arr[i][j];
        }
      }
    }
    return arr;
  }

  function solveColumn(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (typeof arr[i][j] == 'string') {
          for (let k = 0; k < 9; k++) {
            if (
              arr[i][j].includes(arr[k][j]) &&
              i !== k &&
              !isNaN(arr[k][j]) &&
              arr[i][j].length > 1
            ) {
              let index = arr[i][j].indexOf(arr[k][j]);
              arr[i][j] =
                arr[i][j].slice(0, index) +
                arr[i][j].slice(index + 1, arr[i][j].length);
            }
          }
        }
        if (arr[i][j].length === 1) {
          arr[i][j] = +arr[i][j];
        }
      }
    }
    return arr;
  }

  let checker = false;
  puzzle = prettyBoard(puzzle);
  while (checker !== true) {
    puzzle = solveRow(puzzle);
    puzzle = solveColumn(puzzle);
    checker = isSolved(puzzle);
  }
  let prettyPuzzle = '';
  for (i = 0; i < 9; i++) {
    prettyPuzzle = prettyPuzzle + `${i}:`;
    for (let j = 0; j < 9; j++) {
      prettyPuzzle += '|' + puzzle[i][j] + '|';
    }
    prettyPuzzle += '\n ----------------------------\n';
  }

  return prettyPuzzle;
}

function isSolved(board) {
  let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sum[i] += board[i][j];
    }
  }
  for (i = 0; i < 9; i++) {
    if (sum[i] != 45) return false;
  }
  return true;
}

function prettyBoard(puzzleStr) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = puzzleStr.slice(i * 9, i * 9 + 9);
    array[i] = array[i].split('');
    for (let j = 0; j < 9; j++) {
      if (array[i][j] == '-') {
        array[i][j] = '';
      }
      if (array[i][j] !== '') {
        array[i][j] = +array[i][j];
      }
    }
  }
  return array;
}

// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };

console.log();
