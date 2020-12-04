// Саша
const sudokuToArray = (str = '') => {
  let newArr = str.split('').map(item => Number(item) || 0)
  let res = [];
  for (let i = 0; i < 9; i++) {
    res.push(newArr.splice(0, 9));
  }
  return res;
}

//console.log(sudokuToArrayX('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))


// Саша
const sudokuToString = () => { };

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
const getGuesses = (exceptions) => {}; // guesses []

module.exports = {
	sudokuToArray,
	sudokuToString,
	sudokuToMap,
	getSquare,
	getexceptionsFromRow,
	getexceptionsFromCol,
	getExceptionsFromSquare,
	getAllExceptions,
	getGuesses
};
