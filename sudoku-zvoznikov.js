let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';


function searchStringsWithDigits (boardString) {
  const predSud = boardString.match(/.{1,9}/g);
  const digitsToFill = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const checkStringsObject = {};
  for (let i = 0; i < predSud.length; i += 1) {
    let arrOfStrings = [];
    for (let j = 0; j < predSud.length; j += 1) {
      if (predSud[i][j] !== '-') {
        arrOfStrings.push(predSud[i][j]);
      }
    }
    let newArrOfStrings = [];
    for (let k = 0; k < digitsToFill.length; k += 1) {
      if (!arrOfStrings.includes(digitsToFill[k])) {
        newArrOfStrings.push(+digitsToFill[k]);
      }
    }
    checkStringsObject[i] = newArrOfStrings;
  }
  return checkStringsObject;
}

function searchColumnsWithDigits (boardString) {
  const predSud = boardString.match(/.{1,9}/g);
  const digitsToFill = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const checkColumnsObject = {};
  for (let i = 0; i < predSud.length; i += 1) {
    let arrOfColumns = [];
    for (let j = 0; j < predSud.length; j += 1) {
      if (predSud[j][i] !== '-') {
        arrOfColumns.push(predSud[j][i]);
      }
    }

    let newArrOfColumns = [];
    for (let k = 0; k < digitsToFill.length; k += 1) {
      if (!arrOfColumns.includes(digitsToFill[k])) {
        newArrOfColumns.push(+digitsToFill[k]);
      }
    }
    checkColumnsObject[i] = newArrOfColumns;
  }
  return checkColumnsObject;
}




let string = '238965714759413682416278963945136278687524139321897465162359847574682391893741526';

function searchSquaresWithDigits (boardString) {
  const predSud = boardString.match(/.{1,9}/g);
  const digitsToFill = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const checkSquaresObject = {};
  let arrOfSquares = [];

  for (let i = 0; i < 3; i += 1) {
    let arrOfSquares= [];
    for (let j = 0; j < 3; j += 1) {
      if (predSud[i][j] !== '-') {
        arrOfSquares.push(predSud[i][j])
      }
    }
    for (let j = 3; j < 6; j += 1) {
      if (predSud[i][j] !== '-') {
        arrOfSquares.push(predSud[i][j])
      }
    }
    for (let j = 6; j < 8; j += 1) {
      if (predSud[i][j] !== '-') {
        arrOfSquares.push(predSud[i][j])
      }
    }
    let newArrOfSquares = [];
    for (let k = 0; k < digitsToFill.length; k += 1) {
      if (!arrOfSquares.includes(digitsToFill[k])) {
        newArrOfSquares.push(+digitsToFill[k]);
      }
    }
    checkSquaresObject[i] = newArrOfSquares;
  }
  return checkSquaresObject;
}
console.log(searchSquaresWithDigits(string))

