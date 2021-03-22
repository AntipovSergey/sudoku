// Функция создания массива судоку

function arrBoard(puzzle) {
  const board = [];

  let board =[]
  
  let end = 9
  for (let i=0;i<81;i+=9){
    let arr = puzzle.slice(i,end).split('')
    board.push(arr)
    end+=9
  }
  return board;
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
    const currPos = findEmpty(board)

    if (currPos === null) {
      return true
    }
    for (let i = 1; i < size + 1; i++) {

      const currNum = i.toString()      // Приводим число к строке
      
      if ( validate(currNum, currPos, board) ) {    // Узнаем подходящее число
        const x = currPos[0]
        const y = currPos[1]
        board[x][y] = currNum                  // Предполагаем что оно правильное 

        if (solving()) {
          return true
        }

        board[x][y] = '-'         // Возврат на пердыдущее состояние
      }
    }

    return false
  }

    solving();            // Сама рекурсия
    return board;
};

// Проверка результата работы функции solve
function isSolved(board) {


}

// Функция вывода строки в стандартный вид(не массив)
function prettyBoard(board) {
  return board.forEach((element) => {
    console.log(element.join(' '));
  });
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
