function buildBoard(board) {
  const str = board
  const arr = str.split('');
  const arr1 = arr.map((el) => (el === '-' ? '-' : el));
  const board2 = [];
  for (let i = 0; i < arr1.length; i += 9) {
    board2.push(arr1.slice(i, i + 9));
  }
  console.log(board2);
  return board2;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // преобразуем поле из строки в двумерный массив со строковыми значениями
  const boardArray = buildBoard(boardString)

  function validate(number, cellPosition, board){
    const [r, c] = cellPosition;
  
    // row
    for (let i = 0; i < 9; i++) {
      if (board[i][c] === number && i !== r){
        return false;
      }
    }
  
    // column
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === number && i !== c){
        return false;
      }
    }
    
    // box
    const boxRow = Math.floor(r/3)*3
    const boxCol = Math.floor(c/3)*3
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; i < boxCol+3; j++){
        if (board[i][j] === number && i !== r && j !== c){
          return false;
        }
      }
    }
    return true
  }

  function findEmptyCell(boardArray) {
    // определяем длину массива (9)
    const len = 9;

    // бежим по каждому элементу
    for (let r = 0; r < len; r++) {
      for (let c = 0; c < len; c++) {
        // проверяем является ли клетка пустой
        if (boardArray[r][c] === '-') {
          // возвращаем ее индекс, если она пустая
          return [r, c];
        }
      }
      // в противном случае все клетки заполнены
      return 'No empty cells left';
    }
  };

  function findCorrectNumbers() {
    // ищем пустую клетку
    const cellPosition = findEmptyCell(boardArray);
  
    // если пустых клеток не осталось выходим из цикла/функции
    if (cellPosition === 'No empty cells left') {
      // поле судоку полностью заполнено
      return true
    }
  
    // находим число, которое можно подставить
    // на каждой итерации пробуем подставить новое значение (от 1 до 9)
    for (let i = 1; i < 10; i++) {
      const number = i.toString();
      // подставляем новое значение в пустую клетку
      // const [r, c] = cellPosition;
      // boardArray[r][c] = number;

  
      // проверяем отвечает ли таким образом заполненное поле всем условиям
      const validation = validate(number, cellPosition, boardArray);
      // const validation = isSolved(boardArray)
  
      if (validation) {
        // если проверки проходят, оставляем
        const [r, c] = cellPosition;
        boardArray[r][c] = number;
         
        if(findCorrectNumbers()){
          return true
          // return boardArray
        }
        boardArray[r][c] = '-';
      } 
    }
    return false
  };

  findCorrectNumbers();
  return boardArray;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolvedString(board) {
  for(let i = 0; i < board.length; i++){
    let str1 = board[i].join('');
    for(let k = 0; k <= str1.length; k++) {
        for(let j = k+1; j < str1.length; j++) {
            if(str1[j] == str1[k]) {
              return false;
            }
        }
    }
  }
  return true;
}

function isSolvedVertical(board) {
  for(let i = 0; i < board.length; i++){
    let newArr = board.map(item => item[i]);
    let str2 = newArr.join('');
    for(let k = 0; k <= str2.length; k++) {
      for(let j = k+1; j < str2.length; j++) {
        if(str2[j] == str2[k]) {
          return false;
          }
      }
    }
  }
  return true;
}

function isSolved3x3(board) {

  let final=[];
  let row = [0,1,2];
  let col = [0,1,2];
  let counter = 0;

  for ( let i = 0 ; i <= board.length - 1 ; i += 3 ){
    for(let j = 0 ; j <= board.length - 1 ; j += 3 ){
      final.push([]);

      row.forEach( ele1 => {
        final[counter].push([])
        col.forEach( ele2 => {
          final[counter][ele1].push(board[ele1+i][ele2+j]);
        })
      })
      counter+=1;
    }
  }

  newFinal = final.map(array => [array[0].concat(array[1], array[2])])
  const newFinal2 = newFinal.map(array=> array.map(array2 => array2.join('')));

  const valid = isSolvedString(newFinal2)
  if (valid){
    return true
  }
  return false
}

function isSolved(board){
  const valid1 = isSolvedString(board);
  const valid2 = isSolvedVertical(board);
  const valid3 = isSolved3x3(board)

  if (valid1 && valid2 && valid3 ){
    return true
  }
  return false
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  return buildBoard(board)
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

// let board = [
//   ["2", '-', "3", "4", "-", "7", "6", "8", "1"],
//   ["4", "7", "5", "1", "8", "6", "3", "9", "2"],
//   ["1", "6", "8", "3", "9", "2", "7", "4", "5"],
//   ["9", "4", "2", "5", "7", "1", "8", "6", "3"],
//   ["3", "8", "1", "6", "-", "9", "5", "7", "4"],
//   ["6", "5", "7", "8", "3", "4", "1", "2", "9"],
//   ["7", "2", "6", "9", "1", "3", "4", "5", "8"],
//   ["5", "1", "4", "2", "6", "8", "9", "3", "7"],
//   ["8", "3", "9", "7", "4", "5", "2", "1", "6"],
// ];

// console.log(solve(board))
