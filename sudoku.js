/* eslint-disable max-len */
// import fs from 'fs';

const txtPuszl = `
1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
---------------------------------------------------------------------------------
`

function getPuzzle(number) {
	const puzzles =
		txtPuszl.split("\n")
			.filter((line) => line !== "");

	// Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
	let puzzleNumber = (number || 1);
	if (puzzleNumber > puzzles.length) {
		puzzleNumber = puzzles.length;
	}

	// Получить желаемый судоку по индексу и вывести его в консоль.
	const puzzle = puzzles[puzzleNumber - 1];

	console.log(`Решаем судоку №${puzzleNumber}:`);
	// console.log(puzzle, '\n');
	return puzzle;
}



function getArrayFromString(string) {
	const arrayFromString = string.split("");
	const size = 9;
	const subarray = [];
	for (let i = 0; i < arrayFromString.length / size; i++) {
		subarray[i] = arrayFromString.slice(i * size, i * size + size);
	}

	return subarray;
}

// console.log(getArrayFromString(getPuzzle()));

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(board) {
	function getRowColIndex(sudo) {
		for (let r = 0; r < sudo.length; r++) {
			for (let c = 0; c < sudo[r].length; c++) {
				if (sudo[r][c] === "-") {
					return [r, c];
				}
			}
		}
		return true;
	}
	function solveCheck(num, pos, sudo) {
		const [r, c] = pos;
		// Перебор проверка строк
		for (let i = 0; i < 9; i++) {
			if (sudo[i][c] === num && i !== r) {
				// сравнение каждого элемента с числом от 1 до 9, кроме пустого
				return false;
			}
		}
		// Перебор проверка столбцов
		for (let i = 0; i < 9; i++) {
			if (sudo[r][i] === num && i !== c) {
				// сравнение каждого элемента с числом от 1 до 9, кроме пустого
				return false;
			}
		}
		// Проверка секции
		const sectionRow = Math.floor(r / 3) * 3;
		const sectionCol = Math.floor(c / 3) * 3; // ищем правый верхний угол секции 3х3
		for (let i = sectionRow; i < sectionRow + 3; i++) {
			// только 3 иттерации по строке секции
			for (let k = sectionCol; k < sectionCol + 3; k++) {
				// только 3 иттерации по столбцу секции
				if (sudo[i][k] === num && i !== r && k !== c) {
					// сравнение каждого элемента секции с числом от 1-9, кроме пустого
					return false;
				}
			}
		}
		return true;
	}

	function sudoSolve() {
		const emptySpace = getRowColIndex(board);
		if (emptySpace === true) {
			return true;
		}
		for (let i = 1; i <= 9; i++) {
			const candidate = i.toString();
			const checkResult = solveCheck(candidate, emptySpace, board);
			// console.log(emptySpace, candidate, checkResult);
			if (checkResult) {
				const [r, c] = emptySpace;
				board[r][c] = candidate;
				if (sudoSolve()) {
					return true;
				}
				board[r][c] = "-";
			}
		}
		return false;
	}
	sudoSolve();
	return board;
}

console.log(solve(getArrayFromString(getPuzzle())));

// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.
//  */
function isSolved(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === "-") {
				return false;
			}
		}
	}
	return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
	const emptyStr = "---------------------------------";
	const arr = board.map((el) => el.toString().split(",").join(" | "));
	arr.splice(3, 0, emptyStr);
	arr.splice(7, 0, emptyStr);

	const finalArr = arr.toString().split(",").join("\n");
	return finalArr;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
//   getArrayFromString,
//   getPuzzle,
// };
export { solve, isSolved, prettyBoard, getArrayFromString, getPuzzle }