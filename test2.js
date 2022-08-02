// let input = [
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];
let string = '---------------------------------------------------------------------------------';
function boardString(string) {
    const board = [];
    for (let i = 0; i < string.length; i += 9) {
      const arr = [];
      for (let j = 0; j < 9; j += 1) {
        arr.push(string[j + i]);
      }
      board.push(arr);
    }
    return board;
}
console.log(boardString(string));

function solveSudoku(string) {

    const board = boardString(string);
    const size = 9;
    const boxSize = 3;
    
    const findEmpty = (board) => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(board[r][c] === '.') {
                    return [r,c];
                }
            }
        }
        return null;
    }
    
    const validate = (num, pos, board) => {
        const [r,c] = pos;
        console.log('========;;;;', board);

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

                board[x][y] = '.';
            }
        }

        return false;
    }

    solve();
    return board;
};

// console.table(board);
console.table(solveSudoku(string))