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
  
  function sudokuSolution(boardString) {
    let board = [];
    for (let i = 0; i < boardString.length; i += 9) {
      board.push(boardString.slice(i, i + 9).split(''));
    }

    for (let i = 0; i < board.length; i++) {
      board[i] = deleter(i);
    }

    for (let i = 0; i < board.length; i ++) {

    }


    function deleter(a) {
      let digits = {1: '1',2: '2',3: '3',4: '4',5: '5',6: '6',7: '7',8: '8',9: '9',}
      for (let i = 0; i < a.length; i++) {
        for (let key in digits) {
          if(a[i] === key) {
            delete digits[key]
          } 
        }
      }
    }

  }

// function createBordLines(boardString) {
//   let board = []
//   for(let i = 0; i < boardString.length; i+=9) {
//     board.push(boardString.slice(i, i+9).split(''))
//   }

  
//   for(let a = 0; a < board.length; a++) {
//     board[a] = deleter(board[a])
//   }
//   function deleter(a) {
//     let digits = {1: '1',2: '2',3: '3',4: '4',5: '5',6: '6',7: '7',8: '8',9: '9',
//     }
//   for (let i = 0; i < a.length; i++) {
//   for (let key in digits) {
//   if(a[i] === key) {
//     delete digits[key]
//   } git push --set-upstream origin igor
//   }
//   }
//   let shuffleArr = (Object.values(digits)).sort(() => Math.random() - 0.5)
//   // console.log('shuffleArr', shuffleArr)
  
//   for(let i = 0; i < shuffleArr.length; i++) {
//   for(let j = 0; j < a.length; j++) {
//     if(a[j] === '-') {
//       a[j] = shuffleArr[i]
//       break
//     }
//   }
//   }
//   return a
  
//   }
  
//   for (let i = 0; i < 9; i++ ){
//     let subArr = board.map(el => el[i])
//     for(item of subArr) {
//       if (subArr.indexOf(item) === subArr.lastIndexOf(item) && subArr.reduce((acc, el) => +el + acc, 0) === 45) {
//         return board
//       } else {
//         return createBordLines(boardString)
//       }
//     }

//   }
  
  

// }

//console.log('createBordLines', createBordLines(boardString))

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

let board = [
  [
  '5', '6', '8',
  '4', '7', '2',
  '3', '1', '9'
  ],
  [
  '3', '7', '2',
  '6', '1', '9',
  '5', '4', '8'
  ],
  [
  '4', '9', '1',
  '8', '5', '3',
  '6', '2', '7'
  ],
  [
  '6', '3', '9',
  '1', '4', '8',
  '7', '5', '2'
  ],
  [
  '7', '1', '4',
  '5', '2', '6',
  '8', '9', '3'
  ],
  [
  '2', '8', '5',
  '3', '9', '7',
  '4', '6', '1'
  ],
  [
  '9', '4', '3',
  '2', '8', '5',
  '1', '7', '6'
  ],
  [
  '1', '2', '6',
  '7', '3', '4',
  '9', '8', '5'
  ],
  [
  '8', '5', '7',
  '9', '6', '1',
  '2', '3', '4'
  ]
  ] 
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let el of board[i]) {
      if (board[i].indexOf(el) !== board[i].lastIndexOf(el)) {
        
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    let subArr = board.map(el => el[i])
    for (item of subArr) {
      if (subArr.indexOf(item) !== subArr.lastIndexOf(item)) {
       
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i += 3) {
    let array = [];
    for (let j = 0; j < 3; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k])
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {
        
        return false;
      }
    }
  }
  for (let i = 3; i < 12; i += 3) {
    let array = [];
    for (let j = 3; j < 6; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k])
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {

        return false;
      }
    }
  }
  for (let i = 6; i < 15; i += 3) {
    let array = [];
    for (let j = 6; j < 9; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k])
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSolved(board))

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
//console.log(prettyBoard(createBordLines(boardString)))

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  //solve,
  isSolved,
  prettyBoard,
};
