/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let newBoardStrring = boardString.split('');
  let board = [];
  for (let i = 0; i < newBoardStrring.length; i += 9) {
    let n = newBoardStrring.slice(i, i + 9);
    board.push(n);
  }

    const size = 9;
    const boxSize = 3;
    
    const findEmpty = (board) => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if(board[r][c] === '-') {
            return [r,c];
          }
        }
      }
      return null;
    }
    
    const validate = (num, pos, board) => {
      const [r,c] = pos;
      
      //Check rows
      for (let i = 0; i < size; i++) {
        if (board[i][c] === num && i !== r) {
          return false;
        }
      }
      
      //Check cols
      for (let i = 0; i < size; i++) {
        if (board[r][i] === num && i !== c) {
          return false;
        }
      }
      
      
      //Check box
      const boxRow = Math.floor( r/boxSize ) * boxSize;
      const boxCol = Math.floor( c/boxSize ) * boxSize;
      
      for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
          if (board[i][j] === num && i !== r && j !== c) {
            return false;
          }
        }
      }
      
      return true;
    }
    
    const solve = () => {
      const currPos = findEmpty(board);
      
      if (currPos === null) {
        return true;
      }
      //console.log('------------------------------');
      for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
        if (isValid) {
          const [x,y] = currPos;
          board[x][y] = currNum;
          
          if(solve()) {
            return true;
          }
          
          board[x][y] = '-';
        }
      }
      
      return false;
    }
    
    solve();
    return board;
  
};
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));






////////////////////////////////////////////////////////////////////////////

  // 
  // .join('\n').replaceAll(',',' ');
  // console.log(arr);
  // const randNum = Math.round(Math.random() * (9 - 1) + 1).toString();
  
///////////////////////////////////////////////////////////////////////////////////
  // let nonPossibilities = {}, impossibleNumbers, emptySpaces = 81;
  // while (emptySpaces > 0) {
  //   emptySpaces = 0;
  //   for (let vert = 0; vert < boardString.length; vert++) {
  //     for (let horz = 0; horz < boardString.length; horz++) {
  //       if (boardString[vert][horz] === 0) {
  //         nonPossibilities = {};
  //         for (let i = 0; i < 9; i++){
  //           if(boardString[vert][i] > 0){
  //             nonPossibilities[boardString[vert][i]] = true;
  //           };
  //           if(boardString[i][horz] > 0){
  //             nonPossibilities[boardString[i][horz]] = true;
  //           };
  //         }
  //         for (let vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++){
  //           for (let horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++){
  //             if(boardString[vertBox][horzBox]){
  //               nonPossibilities[boardString[vertBox][horzBox]] = true;
  //             }
  //           }
  //         }
  //         impossibleNumbers = Object.keys(nonPossibilities);
  //         if(impossibleNumbers.length === 8){
  //           for (let i = 1; i < 10; i++){
  //             if(impossibleNumbers.indexOf(i.toString()) < 0){
  //               boardString[vert][horz] = i;
//               }
//             }
//           }else{
//             emptySpaces++;
//           }
//         }
//       }
//     }
//     return boardString;
//   };
// }
// console.log(solve([[1,0,5,8,0,2,0,0,0],[0,9,0,0,7,6,4,0,5],[2,0,0,4,0,0,8,1,9],[0,1,9,0,0,7,3,0,6],[7,6,2,0,8,3,0,9,0],[0,0,0,0,6,1,0,5,0],[0,0,7,6,0,0,0,3,0],[4,3,0,0,2,0,5,0,1],[6,0,0,3,0,8,9,0,0]]));

//////////////////////////////////////////////////////////////

/**
 * 
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
function prettyBoard(){

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};














