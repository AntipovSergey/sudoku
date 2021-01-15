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

function renderSudoku(nestedArray, objectSquare) {
  let exportArray = [];

  for (let key in objectSquare) {
    let y = +key[0];
    let x = +key[2];
    nestedArray[y][x] = objectSquare[key];
  }
  return exportArray;
}


module.exports = {
  setStringInTwoArr,
  renderSudoku,
};
