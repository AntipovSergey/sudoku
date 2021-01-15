// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let a1 =[ ['0','1','2','9','10','11','18','19','20']
, ['3','4','5','12','13','14','21','22','23']
, ['6','7','8','15','16','17','24','25','26']
, ['27','28','29','36','37','38','45','46','47']
, ['30','31','32','39','40','41','48','49','50']
, ['33','34','35','42','43','44','51','52','53']
, ['54','55','56','63','64','65','72','73','74']
, ['57','58','59','66','67','68','75','76','77']
, ['60','61','62','69','70','71','78','79','80']];



function solve(boardString) {
  let puzzle={};
  for (let a=0;a<boardString.length;a++){
    boardString[Number(a)]=='-'? puzzle[Number(a)]='0' : puzzle[Number(a)]=boardString[Number(a)]
  }
  let newby ={};
  for (let n=1;n<10;n++){
     let sameIndex=[];
     
    for(let puzz of Object.entries(puzzle)){
   if(puzz[1]==n){ 
     sameIndex.push(puzz[0]) /// добавляем в массив ключ элемента, который совпадает с n
   }
  }
  let nonUsePoint=[];
    for( let oneIndex of sameIndex){
     

        for(let i=-8;i<9;i++){
          let x= Number(oneIndex) + 9*i; // по вертикали
          if(x>-1 && x<81){
             nonUsePoint.push(x)};
        }
        for(let y=0;y<9;y++){
         nonUsePoint.push((Math.floor(oneIndex/9)*9+y)); // по горизонтале
        }
          for(let olya of a1)
            {
              for(o=0;o<olya.length;o++){
                if(Number(olya[o])==Number(oneIndex)){
                  for(let m=0; m<olya.length;m++){
                    nonUsePoint.push(Number(olya[m]));
                   // console.log(nonUsePoint);
                  }
              
                }
              }

              // newby.key =n
              // newby.value=nonUsePoint
            }
        newby.key =n;
        newby.value=nonUsePoint;
        
        
      }
        console.log(newby)
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

console.log( solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))


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

