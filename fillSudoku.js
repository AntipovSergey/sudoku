// const str = "-934---81-7--863-2168-92-4-9-2-71--338-62-5-46-78--12----913-5851-2--9-78-9-452--";
// const str = "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";

const fs = require("fs");
const baza = fs.readFileSync("./puzzles.txt", "utf-8").trim();
const arr3 = baza.split("\n");
let number = process.argv[2];
if (number === undefined)
    number = 1;
if (number >= arr3.length) 
    number = arr3.length - 1;
const str = arr3[number];
console.log(str);

const arr = [];

for (let i = 0; i < 9; i ++) {
    tmp = (str.slice(i * 9, (i + 1) * 9).split(''));
    arr[i] = [];
    for (let j = 0; j < 9; j ++) {
        arr[i][j] = tmp[j];
        if (arr[i][j] != '-') arr[i][j] = Number(arr[i][j]);
    }
}

function printArr(arr) {
    for (let i = 0; i < 9; i++) {
        console.log(arr[i].join(" "));
    }
    console.log("\n");
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
            arr[p.i][p.j] = k;
            // console.log(p.i, p.j, k, "yes");
            // printArr(arr);
            const newArr = [];
            for (let m = 0; m < 9; m ++) {
                newArr[m] = [];
                for (let n = 0; n < 9; n++) {
                    newArr[m][n] = arr[m][n];
                }
            }
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

printArr(arr);
const arr2 = fillSudoku(arr);
if (arr2) printArr(arr2)
else console.log("problems");

