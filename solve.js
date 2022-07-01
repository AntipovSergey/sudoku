

// let input = [
//    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//    [".", "9", "8", ".", ".", ".", ".", "6", "."],
//    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//    [".", "6", ".", ".", ".", ".", "2", "8", "."],
//    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];


let solveS = function(board) {
   const size = 9;
   const boxSize = 3;

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

// console.table(input);
console.table(solveS(input));

