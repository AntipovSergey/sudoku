// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!x
let str2 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve(boardString) {
    let arr = []
    let arrBoardString = boardString.split('')
    for (let i = 0; i < 9; i++) {
        arr.push(arrBoardString.splice(0, 9))
    }
    return arr
}
 let board = solve(str2)


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved( board) {

    const findEmpty = (board) => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
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
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === num && i !== r) {
                return false;
            }
        }

        //Check cols
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === num && i !== c) {
                return false;
            }
        }


        //Check box
        const boxRow = Math.floor( r/3 ) * 3;
        const boxCol = Math.floor( c/3 ) * 3;

        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num && i !== r && j !== c) {
                    return false;
                }
            }
        }

        return true;
    }

    const solution = () => {
        const currPos = findEmpty(board);

        if (currPos === null) {
            return true;
        }
        //console.log('------------------------------');
        for (let i = 1; i < 9 + 1; i++) {
            const currNum = i.toString();
            const isValid = validate(currNum, currPos, board);
            //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
            if (isValid) {
                const [x,y] = currPos;
                board[x][y] = currNum;

                if(solution()) {
                    return true;
                }

                board[x][y] = '-';
            }
        }

        return false;
    }

    solution();
    return board;
};

console.log(isSolved(board))


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.


function prettyBoard(board) {
    let result = [];
    for (let i = 0; i < board.length; i++) {
        result.push(board[i].join(' ') + '\n')
    }
    return result.join('')
}

// Exports all the functions to use them in another file.
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};
