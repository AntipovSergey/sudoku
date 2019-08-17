let renderBufer=[]
let gameSolved = false;

function solveSudocu(sudocu) {
    iterationCorect = true
    findStopPosition(sudocu);
    for (let i = 0; i < sudocu.length; i++) {
        for (let j = 0; j < sudocu[i].length; j++) {
            if (typeof sudocu[i][j] === 'object') {
                for (let k = 0; k < sudocu[i][j].length; k++) {
                    let newSudocu = JSON.parse(JSON.stringify(sudocu))
                    newSudocu[i][j] = newSudocu[i][j][k]
                    recurentSolve(findAll(newSudocu), i, j);
                    if (gameSolved) {
                        return
                    }
                    iterationCorect = true
                }
            }
        }
    }
}

function recurentSolve(sudocu, row, col) {
    renderSudocu(sudocu)
    if (!isSudocuCorrect(sudocu, row, col)) {
        iterationCorect = false
        return
    } else if (isSudocuSolved(row, col)) {
        gameSolved = true;
        return
    }
    for (let i = 0; i < sudocu.length; i++) {
        for (let j = 0; j < sudocu.length; j++) {
            if (typeof sudocu[i][j] === 'object') {
                for (let k = 0; k < sudocu[i][j].length; k++) {
                    let newSudocu = JSON.parse(JSON.stringify(sudocu))
                    newSudocu[i][j] = newSudocu[i][j][k]
                    recurentSolve(findAll(newSudocu), i, j);
/*                     if (!iterationCorect) {
                        return
                    } */
                    if (gameSolved) {
                        return
                    }
                }
                return;
            }
        }
    }
}

function isSudocuCorrect(sudocu, row, col) {

    let corr = {}

    function isRowCorrect(sudocu, row) {
        corr = {}
        for (let j = 0; j < sudocu[row].length; j++) {
            if (typeof sudocu[row][j] !== 'object') {
                if (corr[sudocu[row][j]]) {
                    return false;
                } else {
                    corr[sudocu[row][j]] = true;
                }
            }
        }
        return true;
    }

    function isColCorrect(sudocu, col) {
        corr = {}
        for (let i = 0; i < sudocu.length; i++) {
            if (typeof sudocu[i][col] !== 'object') {
                if (corr[sudocu[i][col]]) {
                    return false;
                } else {
                    corr[sudocu[i][col]] = true;
                }
            }
        }
        return true;

    }

    function isSquareCorrect(sudocu, row, col) {
        corr = {}
        let borders = defineBoarders(row, col);
        for (let i = borders.top; i <= borders.bottom; i++) {
            for (let j = borders.left; j <= borders.right; j++) {
                if (typeof sudocu[i][j] !== 'object') {
                    if (corr[sudocu[i][j]]) {
                        return false;
                    } else {
                        corr[sudocu[i][j]] = true;
                    }
                }
            }
        }
        return true
    }
    return isSquareCorrect(sudocu, row, col) && isColCorrect(sudocu, col) && isRowCorrect(sudocu, row)

}

function isSudocuSolved(i, j) {
    return i == stopPosition.row && j == stopPosition.col;
}

function renderSudocu(sudocu) {
    renderBufer.push(sudocu)
    let render = '';
    for (let i = 0; i < sudocu.length; i++) {
        if (i !== 0) {
            render += '|\n'
        }
        for (let j = 0; j < sudocu[i].length; j++) {
            if (typeof sudocu[i][j] === 'object') {
                render += '| ';
            } else {
                render += '|' + sudocu[i][j]
            }
        }
    }
    render += '|'
    console.log(render);
}

/* renderSudocu(findAll(convertInputString(str))); */