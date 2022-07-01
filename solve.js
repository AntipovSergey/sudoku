const { findEmpty } = require("./findEmpty");  //подключаем функции из файлов
const { validate } = require("./validate");
const { parsing } = require("./parsing");
const fs = require('fs');

const board = parsing();
// console.log(board);

let solveS = function (board) {
   const size = 9; 
   const boxSize = 3;
   const pos = findEmpty(board);   // запускаем функцию поиска незаполненной ячейки

   const solve = () => {                        
       const currPos = findEmpty(board);

       if (currPos === null) {
           return true;
       }
       for (let i = 1; i < size + 1; i++) {
           const currNum = i.toString();
           const isValid = validate(currNum, currPos, board);
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

console.table(solveS(board));



