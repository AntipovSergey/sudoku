// let { board } = require('./runner');

// let solve = function (board) {
//   const size = 9;
//   const sectorSize = 3;

//   const findEmpty = (board) => {
//     for (let r = 0; r < size; r++) {
//       for (let c = 0; c < size; c++) {
//         if (board[r][c] === 0) {
//           return [r, c];
//         }
//       }
//     }
//     return null;
//   };

//   const validate = (num, pos, board) => {
//     const [r, c] = pos;

//     //Этим циклом проверяем строки
//     for (let i = 0; i < size; i++) {
//       if (board[i][c] === num && i !== r) {
//         return false;
//       }
//     }

//     //Этим циклом проверяем колонки
//     for (let i = 0; i < size; i++) {
//       if (board[r][i] === num && i !== c) {
//         return false;
//       }
//     }

//     //Этим циклом проверяем сектора
//     const boxRow = Math.floor(r / sectorSize) * sectorSize;
//     const boxCol = Math.floor(c / sectorSize) * sectorSize;

//     for (let i = boxRow; i < boxRow + sectorSize; i++) {
//       for (let j = boxCol; j < boxCol + sectorSize; j++) {
//         if (board[i][j] === num && i !== r && j !== c) {
//           return false;
//         }
//       }
//     }

//     return true;
//   };

//   const solve = () => {
//     const currPos = findEmpty(board);

//     if (currPos === null) {
//       return true;
//     }
//     //console.log('------------------------------');
//     for (let i = 1; i < size + 1; i++) {
//       const currNum = +i.toString();
//       const isValid = validate(currNum, currPos, board);
//       //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
//       if (isValid) {
//         const [x, y] = currPos;
//         board[x][y] = currNum;

//         if (solve()) {
//           return true;
//         }

//         board[x][y] = 0;
//       }
//     }

//     return false;
//   };

//   solve();
//   return board;
// };

// console.table(board);
// let table = solve(board);

// module.exports = { table };
