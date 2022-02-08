function findElem(board) {
    for (let line = 0; line < 9; line++) {
        for (let colum = 0; colum < 9; colum++) {
            if (board[line][colum] === '-') {
                return [line, colum];
            }
        }
    }
    return null;
}

function solve(boardString) {

    let board = []
    let arrBoardString = boardString.split('')
    for (let i = 0; i < 9; i++) {
        board.push(arrBoardString.splice(0, 9))
    }

    const solveElem = () => {
        let elem = findElem(board)
        if (elem === null) {
            return true
        }
        for (let i = 1; i < 10; i++) {
            let elemNumber = i.toString()
            let isChecked = isSolved(elemNumber, elem, board)

            if (isSolved) {
                const [x, y] = elem
                board[x][y] = elemNumber

                if (solveElem()) {
                    return true
                }

                board[x][y] = '-'
            }
        }
        return false
    }
    solveElem()
    return board
}

function isSolved(number, position, board) {
    let goriz = position[0];
    let vertical = position[1]
    let line = Math.floor(goriz / 3) * 3;
    let colum = Math.floor(vertical / 3) * 3;
    for (let elem = 0; elem < 9; elem++) {
        if (board[elem][vertical] === number && elem !== goriz) {
            return false
        }
    }
    for (let el = 0; el < 9; el++) {
        if (board[goriz][el] === number && el !== vertical) {
            return false
        }
    }
    for (let el = line; el < line + 3; el++) {
        for (let ele = colum; ele < colum + 3; ele++) {
            if (board[el][ele] === number && el !== goriz && ele !== vertical) {
                return false
            }
        }
    }
    return true
}

function prettyBoard(board) {
    let result = [];
    for (let i = 0; i < board.length; i++) {
        result.push(board[i].join(' ') + '\n')
    }
    return result.join('')
}

module.exports = {
    solve,
    isSolved,
    prettyBoard,
};