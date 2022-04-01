const sudokuParse = require('./runner.js')
const puzzle = sudokuParse(process.argv[2])
let tempboard = JSON.parse(JSON.stringify(puzzle))

let solveSudoku = function(puzzle) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (tempboard) => {
      for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
              if(tempboard[r][c] === '.') {
                  return [r,c];
              }
          }
      }
      return null;
  }

  const validate = (num, pos, tempboard) => {
      const [r,c] = pos;

      //Check rows
      for (let i = 0; i < size; i++) {
          if (tempboard[i][c] === num && i !== r) {
              return false;
          }
      }

      //Check cols
      for (let i = 0; i < size; i++) {
          if (tempboard[r][i] === num && i !== c) {
              return false;
          }
      }


      //Check box
      const boxRow = Math.floor( r/boxSize ) * boxSize;
      const boxCol = Math.floor( c/boxSize ) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
          for (let j = boxCol; j < boxCol + boxSize; j++) {
              if (tempboard[i][j] === num && i !== r && j !== c) {
                  return false;
              }
          }
      }

      return true;
  }

  const solve = () => {
      const currPos = findEmpty(tempboard);

      if (currPos === null) {
          return true;
      }
      //console.log('------------------------------');
      for (let i = 1; i < size + 1; i++) {
          const currNum = i.toString();
          const isValid = validate(currNum, currPos, tempboard);
          //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
          if (isValid) {
              const [x,y] = currPos;
              tempboard[x][y] = currNum;

              if(solve()) {
                  return true;
              }

              tempboard[x][y] = '.';
          }
      }

      return false;
  }

  solve();
  return tempboard;
};

console.table(tempboard);
console.table(solveSudoku(tempboard));


// function solve(boardString) {

// }
//   for (let i = 0; i < boardString.length; i += 9) {
//     let range = boardString.slice(i, i + 9).split('');
//     initialBoard.push(range);
//   }
//   console.table(initialBoard);
// }



//   while (checkResult(initialBoard)) {
//     for (let i = 0; i < initialBoard.length; i++) {
//       for (let j = 0; j < initialBoard.length; j++) {
//         if (initialBoard[i][j] === '.') {
//           initialBoard[i][j] = [];
//           for (let k = 1; k <= 9; k++) {
//             if (checkLine(initialBoard, [i, j], k) && checkColumn(initialBoard, [i, j], k) && checkBox(initialBoard, [i, j], k)) {
//               initialBoard[i][j].push(k);
//             }
//           }
//         }
//       }
//     }
//   }



//   for (let i = 0; i < initialBoard.length; i++) {
//     for (let j = 0; j < initialBoard.length; j++) {
//       if (Array.isArray(initialBoard[i][j]) && initialBoard[i][j].length === 1) {
//         initialBoard[i][j] = `${initialBoard[i][j][0]}`;


//       }
//     }
//   }




// const checkLine = function (initialBoard, index, number) {
//   for (let i = 0; i < initialBoard.length; i++) {
//     if (number === Number(initialBoard[index[0]][i])) {

//     }
//     return false
//   }
//   return true
// }

// const checkColumn = function (initialBoard, index, number) {
//   for (let i = 0; i < initialBoard.length; i++) {
//     if (number === Number(initialBoard[i][index[1]])) {
//     }
//     return false
//   }
//   return true
// }

// const checkBox = function (initialBoard, index, number) {
//   const boxRow = Math.floor(index[0] / 3) * 3;
//   const boxCol = Math.floor(index[1] / 3) * 3;
//   // console.log([boxRow, boxCol])
//   for (let i = boxRow; i < boxRow + 3; i++) {
//     for (let j = boxCol; j < boxCol + 3; j++) {
//       if (Number(initialBoard[i][j]) === number && (i !== index[0] || j !== index[1])) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
function isSolved () {
  return true
}








module.exports = {
  solveSudoku,
  isSolved,

};
