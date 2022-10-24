/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

  function solve(boardString) {
    let board = createBordLines(boardString)
    let coordinates = findEmpties(board)
  }
  
function createBordLines(boardString) {
  let board = []
  for(let i = 0; i < boardString.length; i+=9) {
    board.push(boardString.slice(i, i+9).split(''))
  }

  
  for(let a = 0; a < board.length; a++) {
    board[a] = deleter(board[a])
  }
  function deleter(a) {
    let digits = {1: '1',2: '2',3: '3',4: '4',5: '5',6: '6',7: '7',8: '8',9: '9',
    }
  for (let i = 0; i < a.length; i++) {
  for (let key in digits) {
  if(a[i] === key) {
    delete digits[key]
  } 
  }
  }
  let shuffleArr = (Object.values(digits)).sort(() => Math.random() - 0.5)
  console.log('shuffleArr', shuffleArr)
  
  for(let i = 0; i < shuffleArr.length; i++) {
  for(let j = 0; j < a.length; j++) {
    if(a[j] === '-') {
      a[j] = shuffleArr[i]
      break
    }
  }
  }
  return a
  
  }
  let subArr = board.map(el => el[0])

for(item of subArr) {
  if (subArr.indexOf(item) !== subArr.lastIndexOf(item)) {
    return createBordLines(boardString)
  }
}
  return board
}

console.log('createBordLines', createBordLines(boardString))

// function deleter() {
//   let digits = {1: '1',2: '2',3: '3',4: '4',5: '5',6: '6',7: '7',8: '8',9: '9',
//   }
// for (let i = 0; i < line.length; i++) {
// for (let key in digits) {
// if(line[i] === key) {
//   delete digits[key]
// } 
// }
// }
// let shuffleArr = (Object.values(digits)).sort(() => Math.random() - 0.5)
// console.log('shuffleArr', shuffleArr)

// for(let i = 0; i < shuffleArr.length; i++) {
// for(let j = 0; j < line.length; j++) {
//   if(line[j] === '-') {
//     line[j] = shuffleArr[i]
//     break
//   }
// }
// }

// return line

// }
// console.log(deleter())

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const a = board.map((el) => {
    const row = [];
    for (let i = 0; i < el.length; i += 3) {
      row.push(el.slice(i, i + 3).join(''));
    }
    return row.join('   ');
  });
  let res = '';
  for (let i = 0; i < a.length; i += 1) {
    if (i === 2 || i === 5) {
      res += a[i] + '\n\n';
    } else {
      res += a[i] + '\n';
    }
  }
  return res;
}
console.log(prettyBoard(createBordLines(boardString)))

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
