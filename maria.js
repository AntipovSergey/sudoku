let sudokuRow = [
  [1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2],
  [3,3,3,5,3,3,3,3,3],
  [4,4,9,4,4,4,4,4,4],
  [5,5,5,5,5,5,5,5,5],
  [6,6,6,6,6,6,6,6,6],
  [7,5,7,7,7,7,7,7,7],
  [8,8,8,8,8,9,8,8,8],
  [9,9,9,9,9,9,9,9,9]
];                            // полученный массив строк


function test(sudokuRow) {

const arrayColumn = (arr, n) => arr.map(x => x[n]);  // получение массива столбцов из массива строк
let sudokuColumn = [];
for (let i = 0; i < sudokuRow.length; i++) {
sudokuColumn.push(arrayColumn(sudokuRow, i).join(""))
} 

let sudokuSq = [];                                           // получение массива квадратов из массива строк
let arrSq1 = [];
let arrSq2 = [];
let arrSq3 = [];
for (let i = 0; i < sudokuRow.length - 6; i++) {
arrSq1.push(sudokuRow[i][0],sudokuRow[i][1],sudokuRow[i][2]);
arrSq2.push(sudokuRow[i][3],sudokuRow[i][4],sudokuRow[i][5]);
arrSq3.push(sudokuRow[i][6],sudokuRow[i][7],sudokuRow[i][8]);
}
let arrSq4 = [];
let arrSq5 = [];
let arrSq6 = [];
for (let i = 3; i < sudokuRow.length - 3; i++) {
arrSq4.push(sudokuRow[i][0],sudokuRow[i][1],sudokuRow[i][2]);
arrSq5.push(sudokuRow[i][3],sudokuRow[i][4],sudokuRow[i][5]);
arrSq6.push(sudokuRow[i][6],sudokuRow[i][7],sudokuRow[i][8]);
}
let arrSq7 = [];
let arrSq8 = [];
let arrSq9 = [];
for (let i = 6; i < sudokuRow.length; i++) {
arrSq7.push(sudokuRow[i][0],sudokuRow[i][1],sudokuRow[i][2]);
arrSq8.push(sudokuRow[i][3],sudokuRow[i][4],sudokuRow[i][5]);
arrSq9.push(sudokuRow[i][6],sudokuRow[i][7],sudokuRow[i][8]);
}
sudokuSq.push(arrSq1, arrSq2, arrSq3, arrSq4, arrSq5, arrSq6, arrSq7, arrSq8, arrSq9)

// итого у нас 3 массива sudokuRow, sudokuColumn, sudokuSq

let compare = [1,2,3,4,5,6,7,8,9];

compare.forEach(element => {
  for (let i = 0; i < sudokuRow.length; i++) {
    if (sudokuRow[i].indexOf(element) == -1) return false
  }
  return true
});

compare.forEach(element => {
  for (let i = 0; i < sudokuColumn.length; i++) {
    if (sudokuColumn[i].indexOf(element) == -1) return false
  }
  return true
});

compare.forEach(element => {
  for (let i = 0; i < sudokuSq.length; i++) {
    if (sudokuSq[i].indexOf(element) == -1) return false
  }
  return true
});
}

console.log(test(sudokuRow))

// console.log(totalSq)
