const { parsing } = require("./parsing");
const fs = require('fs');
const arrPuzzle = fs.readFileSync('./puzzles.txt','utf-8');


// Первое судоку из файла
const str = arrPuzzle.split('\n');

const parsResult = parsing(str[0]);
console.log(parsResult);


    function findEmpty(parsResult) {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(board[r][c] === '.') {
                    return [r,c];
                }
            }
        }
        return null;
    }

// console.log(findEmpty());