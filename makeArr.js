function makeArr(boardString){
  
    let board = [];
    let arr = boardString.split('');
     for (let i = 0; i < arr.length; i++){
      board.push(arr.splice(0,9))
      }
  return board
  }
  console.log(makeArr('6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--'))