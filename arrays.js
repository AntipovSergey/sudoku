// creates main array from input string
function mainArray(str) {
  const arr = str.split('');
  return arr;
}

// creates array of horizontal lines
function horizontalLines(arr) {
  const result = [];
  for (let i = 0; i < 9; i += 1) {
    const temp = [];
    for (let j = 0; j < 9; i += 1) {
      temp.push(arr[i][j]);
    }
    result.push(temp);
  }
  return result;
}

// creates array of vertical lines from array of horizontal lines
function verticalLines(arr) {
  const result = [];
  for (let i = 0; i < 9; i += 1) {
    const temp = [];
    for (let j = 0; j < 9; j += 1) {
      temp.push(arr[j][i]);
    }
    result.push(temp);
  }
  return result;
}

// creates array of squares from ...
function createArrayOfSquares(arr) {
  const result = [];
  let slicer = 0;
  let start = 0;
  let counter = 0;
  while (result.length !== 9) {
    const temp = [];
    slicer = start;
    while (temp.length !== 9) {
      temp.push(...arr.slice(slicer, slicer + 3));
      slicer += 9;
    }
    start += 3;
    counter += 1;
    if (counter === 3) {
      arr.splice(0, 27);
      start = 0;
      counter = 0;
    }
    result.push(temp);
  }
  return result;
}

module.exports = {
  createArrayOfSquares,
  mainArray,
  horizontalLines,
  verticalLines,
};
