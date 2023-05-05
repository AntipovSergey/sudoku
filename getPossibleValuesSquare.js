const getPossibleValuesSquare = (coord, matrix) => {
  const rowCoords = [];
  const colCoords = [];
  const innerSquares = {
    '0,0': [[0, 1, 2], [0, 1, 2]],
    '0,1': [[0, 1, 2], [3, 4, 5]],
    '0,2': [[0, 1, 2], [6, 7, 8]],
    '1,0': [[3, 4, 5], [0, 1, 2]],
    '1,1': [[3, 4, 5], [3, 4, 5]],
    '1,2': [[3, 4, 5], [6, 7, 8]],
    '2,0': [[6, 7, 8], [0, 1, 2]],
    '2,1': [[6, 7, 8], [3, 4, 5]],
    '2,2': [[6, 7, 8], [6, 7, 8]],
  };

  const relatedRow = Math.floor(Number(coord[0]) / 3);
  const relatedCol = Math.floor(Number(coord[2]) / 3);

  const relatedSquareCoords = innerSquares[`${relatedRow},${relatedCol}`];

  let possibleVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let rCoordInd = 0; rCoordInd <= 2; rCoordInd++) {
    const rMatrix = relatedSquareCoords[0][rCoordInd];
    for (let cCoordInd = 0; cCoordInd <= 2; cCoordInd++) {
      const cMatrix = relatedSquareCoords[1][cCoordInd];
      const currentNumber = matrix[rMatrix][cMatrix];
      possibleVals = possibleVals.filter((el) => el !== currentNumber);
    }
  }
  console.log(possibleVals);
  return possibleVals;
};

module.exports = getPossibleValuesSquare;
