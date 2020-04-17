function solveCheck(puzzle, indexH, indexV, type) {

  let newArray = [];
  let puzzleArr = [];
  
  for (let i = 0; i < 81;) {
    let row = [];
    for (let i2 = 0; i2 < 9; i2++) {
      row.push(puzzle[i]);
      i++;
    }
    puzzleArr.push(row);
  }

  if (type === 'horiz') {
    for (; indexV < 9; indexV++) {
      newArray.push(puzzleArr[indexH][indexV])
    }
  }

  if (type === 'vert') {
    for (; indexH < 9; indexH++) {
      newArray.push(puzzleArr[indexH][indexV])
    }
  }

  if (type === 'sqr') {
    debugger;
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        newArray.push(puzzleArr[indexH][indexV])
        indexV++;
      }
      indexH++;
      indexV -= 3;
    }
  }

  const sortedArray = newArray.sort();
  let a = 1;
  let trigger = true;
  
  for (let i = 0; i < 8; i++) {
    if (trigger === true) {
      trigger = sortedArray[i] == a;
      a++;
    }
    else {
      return false;
    }
  }
  if (trigger === true) {
    return true
  }
}

const string = '135842697494-764-52764--819819--73-6762-83-9-5---61-5-9-76---3-43--2-5-16--3-89--';
const indexH = 0;
const indexV = 0;
const type = 'sqr';
console.log(solveCheck(string, indexH, indexV, type))
