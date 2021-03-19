// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

   if ( Math.sqrt(board.length) % 1 !== 0) {   //  Квадр корень числа
      return false
   }
   
   let size = board.length;
   let emptyValue = firstElement(size);  //  Пустое значение

      if ( emptyValue === null) {
         return true
      }

      for (let i = 1; i < size + 1; i++) {
         const checkValue = i.toString();
         const conformity = solve(size, emptyValue, checkValue); //  соответствие значению

         // console.log('isSolved ===> ', isValid);

      if (conformity) {  //  Если соответствует значению

         // console.log(checkValue);

         size[emptyValue[0]][emptyValue[1]] = conformity;

         if (isSolved(size)) {
            return true;
         } 
   
            size[emptyValue[0]][emptyValue[1]] = "-";
      }
   }  
         return false;
}
   

   // let arr = [1,'-',4,5];
   // let arr2 = [1,3,4,'-', 8]

 //  Получение первого элемента

 const firstElement = (sizeBord) => {
    for (let i = 0; i < sizeBord.length; i++) {
       for (let k = 0; k < sizeBord.length; k++) {
          if (sizeBord[i][k] === '-') {
             return [i, k];
          }
       }
    }
    return null
 }

// console.log(firstElement(arr));
// console.log(firstElement(arr2));



// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
