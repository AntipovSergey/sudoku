// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель попытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {

}
function f4(arr1, arr2) {
  const arr3 = []
  for (let i = 0; i < arr1.length; ++i) {
      if (arr2.includes(arr1[i])) {
          arr3.push(arr1[i])
      }
  }
  return arr3
}

// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function isSolved(board) {

}


// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard,
  f4: f4
}
