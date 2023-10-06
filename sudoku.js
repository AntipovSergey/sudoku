function read() {
	/**
	 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
	 */
}

function solve() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции read.
	 * Возвращает игровое поле после попытки его решить.
	 */
}

function isSolved() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Возвращает булевое значение — решено это игровое поле или нет.
	 */
}

function prettyBoard() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Выводит в консоль/терминал судоку.
	 * Подумай, как симпатичнее его вывести.
	 */
}

const date =  [
  [1, "-", 5, 8, "-", 2, "-", "-", "-"],
  ["-", 9, "-", "-", 7, 6, 4, "-", 5],
  [2, "-", "-", 4, "-", "-", 8, 1, 9],
  ["-", 1, 9, "-", "-", 7, 3, "-", 6],
  [7, 6, 2, "-", 8, 3, "-", 9, "-"],
  ["-", "-", "-", "-", 6, 1, "-", 5, "-"],
  ["-", "-", 7, 6, "-", "-", "-", 3, "-"],
  [4, 3, "-", "-", 2, "-", 5, "-", 1],
  [6, "-", "-", 3, "-", 8, 9, "-", "-"],
];

function isVertical(sudoku,columnIndex){
  const row = []
  for(let i = 0; i<9;i++){
    const value = sudoku[i][columnIndex]

  if(row.includes(value)){
    return false
  }
  if(value !== '-'){
    row.push(value)
  }
}
  return true
}

console.log(isVertical(date,8))

function isHorizontal(sudoku,columnIndex){
  const row = []
  for(let i = 0; i<9;i++){
    const value = sudoku[columnIndex][i]

  if(row.includes(value)){
    return false
  }
  if(value !== '-'){
    row.push(value)
  }
}
  return true
}


console.log(isHorizontal(date,8))