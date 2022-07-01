
const { findEmpty } = require("./findEmpty");
const { validate } = require("./validate");
const { parsing } = require("./parsing");
const fs = require('fs');

const board = parsing();
// console.log(board);

let solveS = function (board) {
   console.log('-------------------', board);
   const size = 9;
   const boxSize = 3;
   const pos = findEmpty(board);

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

console.table(solveS(board));
// console.table(solveS(input));



