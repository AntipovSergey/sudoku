const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function strToArr(boardString) {
  let newArr = [];
  let temp = '';
  for(let i = 0; i < boardString.length; i++){
    temp += boardString[i];
    if(temp.length === 9){
      newArr.push(temp.split(''));
      temp = '';
    }
  }
  return newArr;
}

function solve(arrBoard) {
 
}
// solve(strToArr(boardString));

function isSolved(board) {

}


function prettyBoard(board) {

}


module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
