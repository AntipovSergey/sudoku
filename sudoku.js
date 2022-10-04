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
      
      
      //Check sectors
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


function prettyBoard(board){
  return board.join('\n').replaceAll(',',' ');
}


module.exports = {
  solve,
  //isSolved,
  prettyBoard,
};













