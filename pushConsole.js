const matrix = [
  [4, 8, 6, 8, 9, 7, 1, 2, 7],
  [1, 7, 3, 6, 4, 4, 3, 2, 5],
  [9, 3, 8, 4, 1, 6, 9, 2, 6],
  [3, 5, 9, 2, 7, 1, 9, 5, 3],
  [2, 8, 4, 5, 3, 9, 7, 4, 7],
  [5, 1, 6, 3, 2, 8, 7, 9, 4],
  [8, 6, 9, 5, 7, 3, 1, 4, 8],
  [7, 8, 5, 9, 3, 5, 6, 6, 1],
  [5, 2, 3, 7, 6, 4, 8, 9, 1],
];

function pushConsole(sudoku){
  let row = [];
  for(let i = 0; i < 9; i++){
    row.push(sudoku[i].join(' '))
  
  }
  return row.join('\n')
}
console.table(pushConsole(matrix));


