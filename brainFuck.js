const findEmpty = require('./findEmpty');
const checkVars = require('./checkVars');

function brainFuck(board) {
  const coordinates = findEmpty(board);
  if (coordinates === 'finish') return board
  const possibleValues = checkVars(board, coordinates);
  if (possibleValues.length === 0) return null
  for (let i = 0; i < possibleValues.length; i++) {
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[coordinates[0]][coordinates[1]] = possibleValues[i];
    let nextStep = brainFuck(newBoard);
    if (Array.isArray(nextStep)) return nextStep;
  }
  return null
}

module.exports = brainFuck;
