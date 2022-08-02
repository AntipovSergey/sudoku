function solve(boardString) {
  let board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const arr = [];
    for (let j = 0; j < 9; j += 1) {
      arr.push(boardString[j + i]);
    }
    board.push(arr);
  }

//   let boardArr = board;
//   function empty(boardArr) {
//     for (let i = 0; i < boardArr.length; i++) {
//       for (let j = 0; j < boardArr[i].length; j++) {
//         if (boardArr[i][j] === '-') {
//           let newInteger = Math.floor(1 + Math.random() * 9).toString();
//           while (boardArr[i].includes(newInteger)) {
//             newInteger = Math.floor(1 + Math.random() * 9).toString();
//           }
//           boardArr[i][j] = newInteger;
//         }
//       }
//     }
//     return boardArr;
//   }

const size = 9;
const boxSize = 3;

const empty = (board) => {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (board[row][col] === '-'){
                return [row, col]
            }
        }
    }
    return null;
}

const validate = (num, pos, board) => {
    const [row, col] = pos;

    for (let i = 0; i < size; i++) {
        if (board[i][col] === num && i !== row){
            return false;
        }
    }

    for (let i = 0; i < size; i++) {
      if (board[row][col] === num && i !== col){
          return false;
      }
    }

    const boxRow = Math.floor(row / boxSize) * boxSize
    const boxCol =Math.floor(col / boxSize) * boxSize

    for (let i = boxRow; i < boxRow + boxSize; i++) { 
        for (let j = boxCol; j < boxSize; j++) {
          if (board[i][j] === num && i !== row && j !== col){
            return false
          }
        }
    }
    return true
}


const solveBoard = () => {
    const position = empty(board)
    
    if (position === null){
        return true;
    }

    for (let i = 1; i < size + 1; i++) {
        const num = i.toString();
        const isValid = validate(num, position, board);

      if(isValid){
        const [x,y] = position;
        board[x][y] = num;

        if(solveBoard()){
          return true;
        }
        board[x][y] = '-';

      }
    }
    return false;
}

solveBoard();
return board;
}

console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
