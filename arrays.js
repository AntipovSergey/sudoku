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
/*function squares(arr) {
  const result = [];
  let temp = [];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      temp.push(arr[i][j]);
    }
  }
}*/
