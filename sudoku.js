



// Функция создания массива судоку


function arrBoard(puzzle) {

  let board =[]
  
  let end = 9
  for (let i=0;i<81;i+=9){
    let arr = puzzle.slice(i,end).split('')
    board.push(arr)
    end+=9
  }
  return board
  
}



// Алгоритм решения судоку

function solve(boardString) {


let board = arrBoard(boardString)   //  С помошью функции arrBoard создаем поле судоку из 9ти массивов,все элементы строковые значения

   

  const size = 9; // Размер судоку
  const squareSize = 3; // Размер квадрата 3х3 для поиска

  function findEmpty(board) {            // Поиска нерешенной ячейки
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c]
        }
      }
    }
    return null
  }

  function validate(num, pos, board) {   // Поиск чисел подходящих для решения в колонке,строке,и в текущем квадрате 3х3


    const r = pos[0]
    const c = pos[1]

    
    for (let i = 0; i < size; i++) {        // Сравнение выбранного числа в колонке
      if (board[i][c] === num && i !== r) {
        return false
      }
    }

    
    for (let i = 0; i < size; i++) {          // Сравнение выбранного числа в ряду
      if (board[r][i] === num && i !== c) {
        return false
      }
    }

    // Определение границ квадрата 3х3 в котором осуществляется поиск
    
    const boxRow = Math.floor(r / squareSize) * squareSize  
    const boxCol = Math.floor(c / squareSize) * squareSize

    for (let i = boxRow; i < boxRow + squareSize; i++) {
      for (let j = boxCol; j < boxCol + squareSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false
        }
      }
    }

    return true
  }

  function solving() {                        // Рекурсивная функция

   
    
    
    const currentPos = findEmpty(board)

    if (currentPos === null) {
      return true
    }
    for (let i = 1; i < 10; i++) {

      const currentNum = i.toString()      // Приводим число к строке
      
      if ( validate(currentNum, currentPos, board) ) {    // Узнаем подходящее число
        const x = currentPos[0]
        const y = currentPos[1]
        board[x][y] = currentNum                  // Предполагаем что оно правильное 
        console.log(`Текущая позиция :${currentPos}`)
        console.log(`Текущее вероятное число :${currentNum}`)
        console.table(board)
        if (solving()) {                // Сама рекурсия
          return true
        }
        
        board[x][y] = '-'         // Возврат на пердыдущее состояние
        // console.log(`Текущая позиция :${currentPos}`)
        // console.log(`Текущее вероятное число :${currentNum}`)
        // console.table(board)
      }
    }

    return false
  }

    solving()  ;            
    return board;
};


// Проверка результата работы функции solve
function isSolved(board) {


}


// Функция вывода строки в стандартный вид(не массив)
function prettyBoard(board) {аап

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
