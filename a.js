

  function getString(boardString) {
    const board = boardString.split('\n').join('').split('')
    const newBoard = [];
    for (let i = 0; i < board.length; i += 9 ){
    const row = [board[i], board[i+1], board[i+2]];
    newBoard.push(row);
}
return newBoard;
}

console.log(getString('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))