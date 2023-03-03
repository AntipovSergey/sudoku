// brutforce
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function solveSudoku(table) {
  // console.log(table);
  for (let i = 0; i < table.length; i++) {
    for (let k = 0; k < table[i].length; k++) {
      // console.log(arrNum);
      if (table[i][k] === ".") {
        const number = arrNum.pop().toString();
        // console.log(table[i]);
        // console.log(table[i][k]);
        // const randomNumber = Math.ceil(
        //   Math.random() * table[i].length
        // ).toString();
        // console.log(randomNumber);
        table[i][k] = number;

        const row = k;
        const col = i;

        for (let r = 0; r < table[i].length; r++) {
          if (table[col][r] === number && r !== row) {
            console.log(table[col][row]);
            table[col][row] = ".";
            return solveSudoku(table);
          }
        }

        for (let r = 0; r < table[i].length; r++) {
          if (table[r][row] === number && r !== col) {
            table[col][row] = ".";
            return solveSudoku(table);
          }
        }
      }
      arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  }

  return table;
}

const sudokuPuzzle = [
  [".", "3", "4", "."],
  ["4", ".", ".", "2"],
  ["1", ".", ".", "3"],
  [".", "2", "1", "."],
];

const sudokuPuzzle2 = [
  [".", ".", "6", ".", ".", ".", "8", "7", "."],
  [".", ".", ".", "6", "2", ".", ".", ".", "."],
  ["3", ".", "1", ".", ".", ".", ".", "4", "."],
  [".", ".", ".", ".", ".", ".", "3", "8", "."],
  [".", "8", ".", "3", "9", ".", ".", ".", "."],
  [".", "7", ".", ".", "4", ".", ".", ".", "6"],
  [".", ".", ".", "9", ".", "1", ".", ".", "4"],
  ["7", "4", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", "3", "9"],
];

// console.table(sudokuPuzzle);
// console.table(solveSudoku(sudokuPuzzle));
// console.log(solveSudoku(sudokuPuzzle2));
console.table(solveSudoku(sudokuPuzzle2));
