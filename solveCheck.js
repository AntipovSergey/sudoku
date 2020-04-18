function solveCheck(puzzle, indexH, indexV, type) {
  let newArray = [];
  let puzzleArr = [];

  for (let i = 0; i < 81; ) {
    let row = [];
    for (let i2 = 0; i2 < 9; i2++) {
      row.push(puzzle[i]);
      i++;
    }
    puzzleArr.push(row);
  }

  if (type === 'v') {
    for (; indexV < 9; indexV++) {
      newArray.push(puzzleArr[indexV][indexH]);
    }
  }

  if (type === 'h') {
    for (; indexH < 9; indexH++) {
      newArray.push(puzzleArr[indexV][indexH]);
    }
  }

  if (type === 's') {
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        newArray.push(puzzleArr[indexV][indexH]);
        indexH++;
      }
      indexV++;
      indexH -= 3;
    }
  }

  const sortedArray = newArray.sort();
  let a = 1;
  let trigger = true;

  for (let i = 0; i < 8; i++) {
    if (trigger === true) {
      trigger = sortedArray[i] == a;
      a++;
    } else {
      return false;
    }
  }
  if (trigger === true) {
    return true;
  }
}

module.exports = { solveCheck: solveCheck };
