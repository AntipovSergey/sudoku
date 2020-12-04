// Саша
const sudokuToArray = (str = '') => {
  let newArr = str.split('').map(item => Number(item) || 0)
  let res = [];
  for (let i = 0; i < 9; i++) {
    res.push(newArr.splice(0, 9));
  }
  return res;
}

// const sudokuToString = (arr) => {
//   //arr.filter(item => item = 0).map(item => item = '-') --- not ready but not need
//   let res = '';
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i].join('');
//   }
//   return arr.join('');
// };

// Соня
const sudokuToMap = (sudokuArray) => {
  const sudokuDB = [];
  let count = 0;
  for (let row = 0; row < sudokuArray.length; row++) {
    for (let col = 0; col < sudokuArray[row]; col++) {
      const cell = {};
      const element = sudokuArray[row][col];


      cell.init = !!element;
      cell.row = row;
      cell.col = col;
      cell.sq = getSquare(row, col);
      cell.guesses = [];
      cell.id = count;

      count++;

      sudokuDB.push(cell);
    }
  }

  return sudokuDB;
}

const getSquare = (row, col) => {
  return (Math.ceil((row + 1) / 3) - 1) * 3 + Math.ceil((col + 1) / 3);
}

// Влад
const getexceptionsFromRow = (sudoku, row) => {
  console.log("Hello World!");
}; // []

//Влад
const getexceptionsFromCol = (sudoku, row) => {
  console.log("How are?");
}; // []

// Влад
const getExceptionsFromSquare = (sudoku, sq) => { }; // []

// Влад
const getAllExceptions = (setRow, setCol, setSq) => { }; // Set

// Саша
const getGuesses = (set) => {
  let res = [];
  for (let i = 1; i < 10; i += 1) {
    set.has(i) ? 1 : res.push(i);
  }

  return res;
}; 

module.exports = {
  sudokuToArray,
  //sudokuToString,
  sudokuToMap,
  getSquare,
  getexceptionsFromRow,
  getexceptionsFromCol,
  getExceptionsFromSquare,
  getAllExceptions,
  getGuesses
};
