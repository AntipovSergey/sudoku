//Принимает строку. Возвращает исходный массив
function solve(boardString) {
	let count = 0;
	let str = [];
	let boardFirst = [];
	for (let i = 0; i <= boardString.length; i++) {
		if (count === 9) {
			for (let j = 0; j < str.length; j++) {
				if (str[j] !== '-') {
					str[j] = parseInt(str[j]);
				}
			}
			boardFirst.push(str.slice(0, 9))
			count = 0;
			str.splice(0, 81);


		}
		str.push(boardString[i]);
		count++;
	}
	return boardFirst
}

//Переворачивает матрицу
function transpose(arr) {
	return arr[0].map(function (_, c) { return arr.map(function (r) { return r[c]; }); });
}

//Принимает i-й массив. Определяет есть ли число в строке.
function includeInRow(arrRow, num) {
	return arrRow.includes(num);
}

//Принимает index столбца. Определяет есть ли число в столбце.
function includeInCol(arr, index, num) {
	let newArr = transpose(arr);

	return newArr[index].includes(num);
}

//Принимает массив из значений в квадрате. Определяет есть ли число в квадрате.
function includeInSquare(arrSquare, num) {
	return arrSquare.includes(num);
}

//Принимает исходный массив. Возвращает массив со значениями в квадрате
function getSquare(arr, row, col) {
	let newArr = [];
	xSquare = Math.floor(row / 3)
	ySquare = Math.floor(col / 3)

	for (let r = 0; r < 9; r++) {
		if (Math.floor(r / 3) === xSquare) {
			for (let c = 0; c < 9; c++) {
				if (Math.floor(c / 3) === ySquare) {
					newArr.push(arr[r][c])
				}
			}
		}
	}
	return newArr;
}

//Принимает исходный массив. Расставляет числа по ячейкам.
function setNumbers(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let elem = arr[i][j];
			if (elem === '-') {
				for (let n = 1; n <= 9; n++) {
					let arrSquare = getSquare(arr, i, j);
					//console.log(arrSquare);
					if (includeInSquare(arrSquare, n)) {
						continue;
					} else if (includeInRow(arr[i], n)) {
						continue;
					} else if (includeInCol(arr, j, n)) {
						continue;
					} else {
						arr[i][j] = n;
					}
				}
			}
		}
	}

	return arr;
}

function includesInPosition(arr, num) {
	let position = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let elem = arr[i][j];
			if (num === elem) {
				if (j === position) {
					return true;
				} else {
					position = j;
				}
			}
		}
	}
	return false;
}

function getQuaresArray(arr) {
	let newArr = [];

	for (let x = 0; x < 9; x += 3) {
		for (let y = 0; y < 9; y += 3) {
			newArr.push(getSquare(arr, x, y));
		}
	}
	return newArr;
}

let a = solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');



console.log(setNumbers(a));

// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }

