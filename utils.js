const fs = require("fs");
const os = require('os');

function getStrFromFile(path) {
    let puzzles = fs.readFileSync(path, "utf-8")
    .trim()
    .split(os.EOL);
    return puzzles.filter(Boolean);
}

function getOnePuzzleAsArray(puzzles) {
    let puzzleNumber = Number(process.argv[2]) || 1;
    if (puzzleNumber > puzzles.length) {
        puzzleNumber = puzzles.length;
    }
    console.log(`Решаем судоку номер ${puzzleNumber}\n`);
    return arrFromStr(puzzles[puzzleNumber - 1]);
}

function arrFromStr(str) {
    console.log(`${str}\n`);
    const arr = [];
    for (let i = 0; i < 9; i ++) {
        arr[i] = (str.slice(i * 9, i * 9 + 9).split(''));
        for (let j = 0; j < 9; j++) {
        if (arr[i][j] != '-') arr[i][j] = Number(arr[i][j]);
        }
    }
    return arr;
}

function getStrForPrint(arr) {
    let str = "";
    for (let j = 0; j < 3; j++) {
        str += arr.slice(j * 3, j * 3 + 3).join(" ");
        if (j != 2) str += '   ';
    }
    return str;
}

function printPuzzles(arr, arr2) {
    if (!arr2) {
        for (let i = 0; i < 9; i++) {
            console.log(getStrForPrint(arr[i]));
            if (i && (i + 1) % 3 === 0) console.log('');
        }
        console.log("\nThis puzzle can't be solved");
        return;
    }
    for (let i = 0; i < 9; i++) {
        console.log(getStrForPrint(arr[i]), "                ", getStrForPrint(arr2[i]));
        if (i && (i + 1) % 3 === 0) console.log('');
    }
}

function valide(arr, x, y, k) {
    for (let i = 0; i < 9; i++) {
        if (arr[i][y] === k) return -1;
    }
    for (let j = 0; j < 9; j++) {
        if (arr[x][j] === k) return -1;
    }

    const i = Math.floor(x / 3);
    const j = Math.floor(y / 3);
    for (let m = i * 3; m < i * 3 + 3; m++) {
        for (let n = j * 3; n < j * 3+ 3; n++) {
            if (arr[m][n] === k) return -1;
        }
    }
    return 0;
}

function findEmpty(arr, i, j) {
    for (j; j < 9; j++) {
        if (arr[i][j] === '-') return {i, j};
    }
    for (i = i + 1; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (arr[i][j] === '-') return {i, j};
        }
    }
    // console.log("not found")
}

function fillSudoku(arr, x = 0, y = 0) {
    const p = findEmpty(arr, y, x);
    if (p === undefined) return arr;
    for (let k = 1; k <= 9; k++) {
        if (valide(arr, p.i, p.j, k) === 0) {
            // console.log(p.i, p.j, k, "yes");
            // printArr(arr);
            const newArr = [];
            for (let m = 0; m < 9; m ++) {
                newArr[m] = [];
                for (let n = 0; n < 9; n++) {
                    newArr[m][n] = arr[m][n];
                }
            }
            newArr[p.i][p.j] = k;
            if (p.j <= 7) {
                const ret = fillSudoku(newArr, p.j + 1, p.i);
                if (Array.isArray(ret)) return ret;
            }
            if (p.j === 8 && p.i <= 7) {
                const ret = fillSudoku(newArr, 0, p.i + 1);
                if (Array.isArray(ret)) return ret;
            }
            if (p.j === 8 && p.i === 8) return fillSudoku(newArr, 9, 8);
            // console.log("AAAAA")
        }
        // else   console.log(p.i, p.j, k, "no");
    }
}

module.exports = {
    getStrFromFile,
    getOnePuzzleAsArray,
    printPuzzles,
    fillSudoku,
};
