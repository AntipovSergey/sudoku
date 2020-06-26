function horizont(array, indexI, indexJ) {
  let horizontArray = [];
  for (let j = 0; j < 9; j++) {
    if (typeof array[indexI][j] == "number")
      horizontArray.push(array[indexI][j]);
  }
  return horizontArray;
}

function vertical(array, indexI, indexJ) {
  let verticalArray = [];
  for (let i = 0; i < 9; i++) {
    if (typeof array[i][indexJ] == "number")
      verticalArray.push(array[i][indexJ]);
  }
  return verticalArray;
}

function squard(array, indexI, indexJ) {
  let squardArray = [];
  if (indexI == 0 || indexI == 1 || indexI == 2) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
  }
  if (indexI == 3 || indexI == 4 || indexI == 5) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
  }
  if (indexI == 6 || indexI == 7 || indexI == 8) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
        }
      }
    }
  }
  return squardArray;
}

function checkAll(horizontArray, verticalArray, squardArray) {
  let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < horizontArray.length; i++) {
    if (possible.includes(horizontArray[i]))
      possible.splice(possible.indexOf(horizontArray[i]), 1);
  }
  for (let i = 0; i < verticalArray.length; i++) {
    if (possible.includes(verticalArray[i]))
      possible.splice(possible.indexOf(verticalArray[i]), 1);
  }
  for (let i = 0; i < squardArray.length; i++) {
    if (possible.includes(squardArray[i]))
      possible.splice(possible.indexOf(squardArray[i]), 1);
  }
  return possible;
}
