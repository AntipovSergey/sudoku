// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let puzzle={};
  for (let a=0;a<boardString.length;a++){
    boardString[Number(a)]=='-'? puzzle[Number(a)]='0' : puzzle[Number(a)]=boardString[Number(a)]
  }
  //console.log(puzzle)
 
  for (let n=1;n<2;n++){
     let sameIndex=[];
    for(let puzz of Object.entries(puzzle)){
   if(puzz[1]==n){ 
     sameIndex.push(puzz[0])
   }
   
  }
    console.log(sameIndex)
    for( let oneIndex of sameIndex){
      let nonUsePoint=[];
     // nonUsePoint[0]=Number(oneIndex);
        for(let i=-8;i<9;i++){
          let x= Number(oneIndex) + 9*i;
          if(x>-1 && x<81){
             nonUsePoint.push(x)};
        }
        for(let y=0;y<9;y++){
         nonUsePoint.push((Math.floor(oneIndex/9)*9+y));
        }

          for()


        console.log(nonUsePoint)
      }
     
  }
  
}


 function alex(){
   let sameIndex=[];
   for (let n=1;n<10;n++){
    if(puzzle.value==n){ 
      sameIndex.push(this.key)
    }






   } 
 }




// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(puzzle) {
  let prettyBoard = [];
  let arr = Object.values(puzzle);
  prettyBoard.push(arr.slice(0, 9),arr.slice(9, 18),arr.slice(18, 27),arr.slice(27, 36),arr.slice(36, 45),arr.slice(45, 54),arr.slice(54, 63),arr.slice(63, 72),arr.slice(72))


  return prettyBoard;
}


// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

