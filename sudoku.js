const findEmpty = require('./find')

// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель попытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {
  // let arr = boardString.split('')

  // let board = []
  // let size = 9
  // while (arr.length > 0) board.push(arr.splice(0, size))
  // return board


}


// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function isSolved(board) {
  console.table(board)
  return true
}

// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function prettyBoard(board) {
return 
}

// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
