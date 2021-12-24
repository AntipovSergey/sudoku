// Use filesystem.
const fs = require('fs');
const { f2 } = require('./sudoku');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// Судоку, которые решает ваша программа, можно найти
// в файле sudoku-puzzles.txt.
//
// Помните, что в конце каждой строки файла есть символы новой строки,
// так что вы должны их удалить.

// Получает одну головоломку из текстового файла.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {

  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  let a = sudoku.f0(puzzle)
  sudoku.f3(1, 7, a)


  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

function f3(i, j, arr0) {
	//первый квадрат
	const qw = [];
	const newArr = []
	if (i < 3 && i >= 0 && j >= 0 && j < 3) {
		newArr[0] = []
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				newArr[0].push(arr0[i][j]);
			}
		}
		for (let x = 1; x < 10; ++x) {
			let number = x.toString();
			if (!newArr[0].includes(number)) {
				qw.push(number)
			}
		
		//console.log(qw)
	}
	//второй квадрат
	newArr[1] = [];
	for (let i = 3; i < 6; i++) {
		for (let j = 0; j < 3; j++) {
			newArr[1].push(arr0[i][j]);
		}
	}
	//третий квардрат
	newArr[2] = [];
	for (let i = 6; i < 9; i++) {
		for (let j = 0; j < 3; j++) {
			newArr[2].push(arr0[i][j]);
		}
	}
	//четвертый квадрат
	newArr[3] = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 3; j < 6; j++) {
			newArr[3].push(arr0[i][j]);
		}
	}
	// пятый квадрат
	newArr[4] = [];
	for (let i = 3; i < 6; i++) {
		for (let j = 3; j < 6; j++) {
			newArr[4].push(arr0[i][j]);
		}
	}
	//шестой  квардрат
	newArr[5] = [];
	for (let i = 6; i < 9; i++) {
		for (let j = 3; j < 6; j++) {
			newArr[5].push(arr0[i][j]);
		}
	}
	//седьмой квадрат
	newArr[6] = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 6; j < 9; j++) {
			newArr[6].push(arr0[i][j]);
		}
	}
	// восьмой  квадрат
	newArr[7] = [];
	for (let i = 3; i < 6; i++) {
		for (let j = 6; j < 9; j++) {
			newArr[7].push(arr0[i][j]);
		}
	}
	//девятый   квардрат
	newArr[8] = [];
	for (let i = 6; i < 9; i++) {
		for (let j = 6; j < 9; j++) {
			newArr[8].push(arr0[i][j]);
		}
	}
	// console.log(newArr)
}*/

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);



