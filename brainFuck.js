function brainFuck(board) {
  const coordinates = findEmpty(board);
  if(coordinates=== 'finish') return board //[board, 'finish'];
  const possibleValues = checkVars(board, coordinates);
  if (possibleValues === null) return null //[board, null];
  for (let i = 0; i < possibleValues.length + 1; i++) {
    let newBoard = board[coordinates[0]][coordinates[1]] = possibleValues[i];
    let nextStep = brainFuck(newBoard);
    //if (nextStep === 'finish') return nextStep;
    if (nextStep === null){
      if (i === possibleValues.length) return null
    }
    if (nextStep !== null) return nextStep;
  }
}

