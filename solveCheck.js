function solveCheck(arr, indexH, indexV, type) {
  let newArray = [];
  let puzzleArr = arr.slice();

  if (type === 'v') {
    for (; indexV < 9; indexV++) {
      newArray.push(puzzleArr[indexV][indexH]);
    }
  }

  if (type === 'h') {
    newArray = puzzleArr[indexV].slice();
  }

  if (type === 's') {
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        newArray.push(puzzleArr[indexV + j][indexH + i]);
      }
    }
  }

  const sortedArray = newArray.sort();
  let a = 1;
  let trigger = true;

  for (let i = 0; i < 9; i++) {
    if (trigger === true) {
      trigger = sortedArray[i] == a++;
    } else {
      return false;
    }
  }
  return trigger;
}

module.exports = { solveCheck: solveCheck };
