let sudoku1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let sudoku = sudoku1.split ('')

let number = 1
let part = 0

function checkSudoku (sudoku) {
	sudoku.indexOf ('-') > -1 ? 'судоку не решен' : console.log ('судоку решен')
}

checkSudoku (sudoku)

// function game () {
// ищем '-' в 0 строке
// возвращаем результат
// let checkEmpty = rowCheck ('-', part)

function checkNumber (number, part) {
	if (number >= 9) {
		
		// console.log (number, part)
		// console.log (sudoku)
		checkNumber (1, part + 1)
	} else if (part >= 9) {
		// console.log (sudoku)
		// console.log (number, part)
		checkNumber (1, 0)
	} else {
		// если "-" есть
		if (rowCheck ('-', part) !== -1) {
			//начинаем искать число в той же строке
			let checkNumberRow = rowCheck (number, part)
			if (checkNumberRow > -1) {
				//если есть, переключаем число
				return checkNumber (number + 1, part)
			} else {
				//если нет, ищем это число в столбце
				let checkNumberCol = colCheck (number, rowCheck ('-', part))
				if (checkNumberCol > -1) {
					//если есть, переключаем число
					return checkNumber (number + 1, part)
				} else {
					//если нет, ищем это число в квадрате
					let checkNumberSquare = squCheck (number, part)
					if (checkNumberSquare > -1) {
						//если есть, переключаем число
						return checkNumber (number + 1, part)
					} else {
						//если нет в строке, столбце и в квадрате, запускаем проверку на уникальность этого числа
						uniqCheck (number, part, rowCheck ('-', part))
					}
				}
			}
		}
	}
	return checkNumber (number + 1, part)
}

console.log (checkNumber (1, 0))

function rowCheck (number, part) {
	let sudo = []
	for (let j = 0; j < sudoku.length; j = j + 9) {
		let res = []
		for (let i = j; i < j + 9; i++) {
			res.push (sudoku[i])
		}
		sudo.push (res)
	}
	// console.log (part)
	// console.log (`Поиск в строке номера ${number}`)
	let rownam = sudo[part].indexOf (String (number))
	// console.log (`Поиск в строке номера ${number}`)
	return rownam
}

function colCheck (number, part) {
	let sudo = []
	for (let j = 0; j < 9; j++) {
		let res = []
		for (let i = j; i < 81; i = i + 9) {
			res.push (sudoku[i])
		}
		sudo.push (res)
	}
	// console.log (part)
	// console.log (`Поиск в столбце номера ${number}`)
	return sudo[part].indexOf (String (number))
}

function squCheck (number, part) {
	let osn = []
	for (let q = 0; q < sudoku.length; q = q + 27) {
		for (let w = q; w < q + 9; w = w + 3) {
			let sudo = []
			for (let i = w; i < 27 + q; i = i + 9) {
				let res = []
				for (let j = i; j < i + 3; j++) {
					res.push (sudoku[j])
				}
				sudo = sudo.concat (res)
			}
			osn.push (sudo)
		}
	}
	if (part < 3) {
		// console.log (part)
		// console.log (`Поиск в квадрате номера ${number}`)
		return osn[Math.floor (part / 3)].indexOf (String (number))
	} else if (part < 6) {
		// console.log (part)
		// console.log (`Поиск в квадрате номера ${number}`)
		return osn[Math.floor (part / 3) + 3].indexOf (String (number))
	} else {
		// console.log (part)
		// console.log (`Поиск в квадрате номера ${number}`)
		return osn[Math.floor (part / 3) + 6].indexOf (String (number))
	}
}

// let number = 1
// let part = 2
// let empty = 0
// console.log (uniqCheck (number, part, empty))

function uniqCheck (number, part, empty) {
	if (((empty === 0) || (empty === 3) || (empty === 6))) {
		let col036 = []
		for (let w = empty + 1; w < empty + 2; w++) {
			if (colCheck (number, w) !== -1) {
				col036.push (colCheck (number, w))
				// console.log(`Столбцы036 ${col036}`)
			}
		}
		// console.log(`Столбцы036 ${col036}`)
		let row036 = []
		if ((part === 0) || (part === 3) || (part === 6)) {
			for (let w = part + 1; w < empty + 2; w++) {
				if (rowCheck (number, w) !== -1) {
					row036.push (rowCheck (number, w))
					// console.log(`Строки036 ${row036}`)
				}
			}
		}
		// console.log(`Строки036 ${row036}`)
		let row147 = []
		if ((part === 1) || (part === 4) || (part === 7)) {
			for (let w = part - 1; w < part + 2; w = w + 2) {
				if (rowCheck (number, w) !== -1) {
					row147.push (rowCheck (number, w))
					// console.log(`Строки036 ${row147}`)
				}
			}
		}
		// console.log(`Строки0147 ${row147}`)
		let row258 = []
		if ((part === 2) || (part === 5) || (part === 8)) {
			for (let w = part - 1; w < 0; w--) {
				if (rowCheck (number, w) !== -1) {
					row258.push (rowCheck (number, w))
				}
			}
			
		}
		if ((col036.length <= 0)&&(row036 <= 0)&&(row147 <= 0)&&(row258 <= 0)) {
			sudoku[empty + (9 * part)] = String (number)
		}
		// console.log (`${number} / ${part} / ${empty}`)
		// console.log (`Столбцы036 ${col036}`)
		// console.log (`Строки036 ${row036}`)
		// console.log (`Строки147 ${row147}`)
		// console.log (`Строки258 ${row258}`)
		
	} else if ((empty === 1) || (empty === 4) || (empty === 7)) {
		let col147 = []
		for (let w = empty - 1; w < empty + 2; w = w + 2) {
			if (colCheck (number, w) !== -1) {
				col147.push (colCheck (number, w))
			}
		}
		// console.log(`Столбцы147 ${col147}`)
		let row036 = []
		if ((part === 0) || (part === 3) || (part === 6)) {
			for (let w = part + 1; w < empty + 2; w++) {
				if (rowCheck (number, w) !== -1) {
					row036.push (rowCheck (number, w))
				}
			}
		}
		// console.log(`Строки036 ${row036}`)
		let row147 = []
		if ((part === 1) || (part === 4) || (part === 7)) {
			for (let w = part - 1; w < part + 2; w = w + 2) {
				if (rowCheck (number, w) !== -1) {
					row147.push (rowCheck (number, w))
				}
			}
		}
		let row258 = []
		if ((part === 2) || (part === 5) || (part === 8)) {
			for (let w = part - 1; w < 0; w--) {
				if (rowCheck (number, w) !== -1) {
					row258.push (rowCheck (number, w))
				}
			}
		}
		if ((col147.length <= 0)&&(row036 <= 0)&&(row147 <= 0)&&(row258 <= 0)) {
			sudoku[empty + (9 * part)] = String (number)
		}
		
		// console.log (`${number} / ${part} / ${empty}`)
		// console.log (`Столбцы147 ${col147}`)
		// console.log (`Строки036 ${row036}`)
		// console.log (`Строки147 ${row147}`)
		// console.log (`Строки258 ${row258}`)
	} else if ((empty === 2) || (empty === 5) || (empty === 8)) {
		let col258 = []
		for (let w = empty - 1; w < 0; w--) {
			if (colCheck (number, w) !== -1) {
				col258.push (colCheck (number, w))
				// console.log (`Столбцы036 ${col258}`)
			}
		}
		let row036 = []
		if ((part === 0) || (part === 3) || (part === 6)) {
			for (let w = part + 1; w < empty + 2; w++) {
				if (rowCheck (number, w) !== -1) {
					row036.push (rowCheck (number, w))
				}
			}
		}
		let row147 = []
		if ((part === 1) || (part === 4) || (part === 7)) {
			for (let w = part - 1; w < part + 2; w = w + 2) {
				if (rowCheck (number, w) !== -1) {
					row147.push (rowCheck (number, w))
				}
			}
		}
		let row258 = []
		if ((part === 2) || (part === 5) || (part === 8)) {
			for (let w = part - 1; w < 0; w--) {
				if (rowCheck (number, w) !== -1) {
					row258.push (rowCheck (number, w))
				}
			}
		}
		if ((col258.length <= 0)&&(row036 <= 0)&&(row147 <= 0)&&(row258 <= 0)) {
			sudoku[empty + (9 * part)] = String (number)
		}
		// console.log (`${number} / ${part} / ${empty}`)
		// console.log (`Столбцы258 ${col258}`)
		// console.log (`Строки036 ${row036}`)
		// console.log (`Строки147 ${row147}`)
		// console.log (`Строки258 ${row258}`)
		// if ()
		// {sudoku[empty + (9 * part)] = String (number) }
	}
	
	// for (let j = 1; j < 3; j++) {
	// 	if (rowCheck (number, part + j) === -1) {
	//
	// 	}
	// }
	
	// 		sudoku[empty + (9 * part)] = String (number)
	// 		return checkNumber (number, part)
	// 	} else {
	// 		return checkNumber (number + 1, part)
	// 	}
// }
}

// return checkNumber (number + 1, part)
// }
// }
//
// else
// if (empty === (1 || 4 || 7)) {
// 	for (let w = empty + 1; w < empty + 3; w++) {
// 		if (colCheck (number, w) === -1) {
// 			for (let j = 1; j < 3; j++) {
// 				if (rowCheck (number, part + j) === -1) {
// 					sudoku[empty + (9 * part)] = String (number)
// 					return checkNumber (number, part)
// 				} else {
// 					return checkNumber (number + 1, part)
// 				}
// 			}
// 		}
// 		return checkNumber (number + 1, part)
// 	}
// } else if (empty === (2 || 5 || 8)) {
// 	for (let w = empty + 1; w < empty + 3; w++) {
// 		if (colCheck (number, w) === -1) {
// 			for (let j = 1; j < 3; j++) {
// 				if (rowCheck (number, part + j) === -1) {
// 					sudoku[empty + (9 * part)] = String (number)
// 					return checkNumber (number, part)
// 				} else {
// 					return checkNumber (number + 1, part)
// 				}
// 			}
// 		}
// 		return checkNumber (number + 1, part)
// 	}
// } else {
// 	console.log ('4')
// }
// }

// console.log( squCheck() )
/* первый кубик
1-5
-9-
2--
второй кубик
8-2
-76
4--
третий кубик
---
4-5
819

-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--`

*/

/*Принимает доску в виде строки в формате, который вы видите в файле головоломки.
Возвращает что-то, представляющее собой доску после того, как ваш решатель попытался решить ее.
Как вы представляете свой совет, зависит от вас!
*/
function solve (boardString) {
//принимает и решает
}

/* Возвращает логическое значение, указывающее, решена ли предоставленная плата.
Входная плата будет в любой форме "решить" возвращает. */
function isSolved (board) {
// возвращает значение - решено или нет
}

/* Принимает плату в некоторой форме и возвращает строку, которая хорошо отформатирована для вывода на экран.
Входная плата будет в любой форме "решить" возвращает. */

function prettyBoard (board) {
// красиво выводит
}

// module.exports = {
//     solve: solve,
//     isSolved: isSolved,
//     prettyBoard: prettyBoard
// }