




/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
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
console.log(isSolved(board));

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

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

