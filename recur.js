let mass = [
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 8, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9], 7, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9], 7, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 9
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 7, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 2, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9], 6
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 8, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 5, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6, 2
    ],
    [2, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 3, 8, 1, 7, [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [1, [1, 2, 3, 4, 5, 6, 7, 8, 9], 7, 6, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 5
    ],
    [4, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [7, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 2, 8
    ],
    [8, 6, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
]

function solveSudocu(sudocu) {
    let gameSolved = false;
    for (let i = 0; i < sudocu.length; i++) {
        for (let j = 0; j < sudocu.length; j++) {
            if (typeof sudocu[i][j] === 'object') {
                for (let k = 0; k < sudocu[i][j].length; k++) {
                    let newSudocu = JSON.parse(JSON.stringify(sudocu))
                    newSudocu[i][j][k] = newSudocu[i][j][k]
                    recurentSolve(newSudocu, i, j);
                    if (gameSolved) {
                        return
                    }
                }
            }
        }
    }
}

function recurentSolve(sudocu, row, col) {
    if (!isSudocuCorrect(sudocu, row, col)) {
        return
    }
    if (isSudocuCorrect(sudocu, row, col) && isSudocuSolved(sudocu)) {
        return
        gameSolved = true;
    }

    for (let i = 0; i < sudocu.length; i++) {
        for (let j = 0; j < sudocu.length; j++) {
            if (typeof sudocu[i][j] === 'object') {
                for (let k = 0; k < sudocu[i][j].length; k++) {
                    let newSudocu = JSON.parse(JSON.stringify(sudocu))
                    newSudocu[i][j][k] = newSudocu[i][j][k]
                    recurentSolve(newSudocu, i, j);
                }
            }
        }
    }
}

function isSudocuCorrect(sudocu, row, col) {

    function isRowCorrect(sudocu, row) {
        rowCorr = {}
        for (let j = 0; j < sudocu[row].length; j++) {
            if (rowCorr[sudocu[row][j]]) {
                return false;
            } else {
                rowCorr[sudocu[row][j]] = true;
            }
        }
        return true;
    }

    function isColCorrect(sudocu, col) {
        for (let i = 0; i < sudocu.length; i++) {
            if (rowCorr[sudocu[i][col]]) {
                return false;
            } else {
                rowCorr[sudocu[i][col]] = true;
            }
        }
        return true;

    }

    function isSquareCorrect(sudocu, row, col) {

    }

}