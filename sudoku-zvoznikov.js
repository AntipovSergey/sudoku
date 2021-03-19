let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve (boardString) {
  const predSud = boardString.match(/.{1,9}/g);
  const digitsToFill = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const checkObject = {};
  let sum = '';
  for (let i = 0; i < predSud.length; i += 1) {
    let newArr = [];
    for (let j = 0; j < predSud.length; j += 1) {
      if (predSud[i][j] !== '-') {
        newArr.push(predSud[i][j])
      }
    }
    let oldArr = [];
    for (let k = 0; k < digitsToFill.length; k += 1) {
      if (!newArr.includes(digitsToFill[k])) {
        oldArr.push(digitsToFill[k]);
      }
    }
    checkObject[i] = oldArr;
  }
  return checkObject;
}

console.log(solve(boardString))
