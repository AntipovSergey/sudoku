
function getBoard (puzzle) {
  let arr = puzzle.replace(/-/g, 0).split('')

  //console.log()
  let board = []
  for ( let i=0; i < 9; i += 1) {
    board.push(arr.splice(0, 9))
  }
  return board
}bhg

console.table( getBoard ('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
);





module.exports {
  getBoard
}
