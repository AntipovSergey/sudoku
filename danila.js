const place = [
  ['1', null, '5', '8', null, '2', null, null, null],
  [null, '9', null, null, '7', '6', '4', null, '5'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
  ['2', null, null, '4', null, null, '8', '1', '9'],
];

function setStringInTwoArr(inputArray, coordinates) {
  const coordArray = coordinates.split(',');
  let y = coordArray[0];
  let x = coordArray[1];
  // console.log(x, y);
  let str = '';

  inputArray[y].forEach((el) => {
    if (el) {
      str += el;
    }
  });

  inputArray.forEach((currentArray) => {
    if (currentArray[x]) {
      str += currentArray[x];
    }
  });
  return str;
}

console.log(setStringInTwoArr(place, '0,3'));
console.log(typeof setStringInTwoArr(place, '0,3'));

function renderSudoku(nestedArray, ) {

}

// module.exports = {setStringInTwoArr}
