const fs = require('fs')
const data = fs.readFileSync('./sudoku-puzzles.txt',
  'utf-8')


function sudokuParse(data, puzzleNumber = 0) {
  let puzzle = data.split('\n')[puzzleNumber];
  //console.log(puzzle);
  return puzzle;
}
//console.log(sudokuParse(data, 13))

function getBoard(data1) { // Получаем доску
  const board = sudokuParse(data1, 13)
  let sudokuBoard = [];
  for (let i = 0; i < 81; i += 9) {
    sudokuBoard.push(board.slice(i, i + 9).split('').map((el) => {
      if ('-' === el) return 0
      return Number(el)
    }))
  }
  return sudokuBoard
}
//console.log('отрисовываем доску') //  (+) РАБОТАЕТ (+) 
//console.table(getBoard(data))


const board = getBoard(data);

// Получаем пустую ячейку





function findEmpty(board) {
  //const board = getBoard(data); // Перетащили первую глобальную переменную с 19
  for (let horizon = 0; horizon < board.length; horizon++) {
    for (let vertical = 0; vertical < board[horizon].length; vertical++) {
      if (board[horizon][vertical] === 0) {
        //console.log([horizon, vertical])    //   (+) РАБОТАЕТ (+) 
        return [horizon, vertical];
      }
    }
  }
  return null
}
//console.log('получаем пустое значение')
//console.log(findEmpty([[], []]))


let emptyValue = findEmpty(board);



function check(emptyValue1, board1, num1) {
  const horizon = emptyValue1[0];
  const vertical = emptyValue1[1];
  //console.log(horizon, vertical)  //   (+) РАБОТАЕТ (+) 
  //идем по строке

  const arrVer = [];
  for (let i = 0; i < 9; i++) {
    arrVer.push(board1[i][vertical]);
  }
  //console.log(arrVer)    (+) РАБОТАЕТ (+) 
  const arrHor = board1[horizon];
  //console.log(arrHor) //               (+) РАБОТАЕТ (+) 
  if (!arrVer.includes(num1) && !arrHor.includes(num1)) {
    return true;
  }
  return false;
}
//console.log(check(emptyValue, board, 5)) // -!!!! What the NUM ?


function checkBox(currentNum1, emptyValue1, board1) {
  const boxRow = Math.floor(emptyValue1[0] / 3) * 3;
  const boxCol = Math.floor(emptyValue1[1] / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board1[i][j] === currentNum1 && i !== emptyValue1[0] && j !== emptyValue1[1]) {
        return false; //!== currentRow && j !== currentCol исключает проверку текущего числа
      }
    }
  }
  return true;
}
//console.log(checkBox(5, emptyValue, board))     // -!!!! What the CurretNUM ?



function recurse(board1, emptyValue1) {
  //let emptyValue = findEmpty(board); // Перетащили вторую глобальную переменную с 36 ??
  if (findEmpty(board1) === null) {
    //console.table(board1)
    return true;
  }
  const [h, v] = emptyValue1;
  for (let i = 1; i <= 9; i++) {
    //console.log('Димулька - Хакер!', emptyValue1)
    if (check(emptyValue1, board1, i) && checkBox(i, emptyValue1, board1)) { // Проверяем подобранные циклом числа на возможность проставить горизнталь/вертикаль

      board[h][v] = i;
      //console.log(board[h], [v])
      if (recurse(board, findEmpty(board))) {
        //console.log('Recurse2_board ==>', board)
        return board;
      }
      board[h][v] = 0;
    }
  }

  return false;
}
console.log('FINAL ==>')
console.table(recurse(board, findEmpty(board)));



