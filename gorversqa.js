const sudoku = require("./sudoku");
let puzzle = [
  ["-", 6, 8, "-", "-", "-", 9, 3, "-"],
  ["-", 4, 2, "-", "-", "-", 6, "-", "-"],
  [1, 9, "-", "-", 8, "-", "-", 4, "-"],
  ["-", 8, 5, 2, "-", 1, "-", "-", 7],
  [7, "-", "-", 8, 9, "-", "-", "-", "-"],
  [2, "-", "-", "-", "-", 7, 5, "-", 3],
  ["-", 2, "-", 1, "-", "-", "-", 5, "-"],
  [8, 5, "-", "-", 4, "-", 7, 6, "-"],
  [4, 7, 3, "-", 5, 2, "-", "-", 9],
];
function horizont(array, indexI, indexJ) {
  let horizontArray = [];
  for (let j = 0; j < 9; j++) {
    // if (typeof array[indexI][j] == "number")
    if (array[indexI][j] != "-") horizontArray.push(array[indexI][j]);
  }
  return horizontArray;
}
function vertical(array, indexI, indexJ) {
  let verticalArray = [];
  for (let i = 0; i < 9; i++) {
    // if (typeof array[i][indexJ] == "number")
    if (array[i][indexJ] != "-") verticalArray.push(array[i][indexJ]);
  }
  return verticalArray;
}
function squard(array, indexI, indexJ) {
  let squardArray = [];
  if (indexI == 0 || indexI == 1 || indexI == 2) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
  }
  if (indexI == 3 || indexI == 4 || indexI == 5) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
  }
  if (indexI == 6 || indexI == 7 || indexI == 8) {
    if (indexJ == 0 || indexJ == 1 || indexJ == 2) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 3 || indexJ == 4 || indexJ == 5) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (array[i][j] != "-") squardArray.push(array[i][j]);
        }
      }
    }
    if (indexJ == 6 || indexJ == 7 || indexJ == 8) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          // if (typeof array[i][j] == "number") squardArray.push(array[i][j]);
          if (typeof array[i][j] != "-") squardArray.push(array[i][j]);
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
function goingThrough(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] == "-") {
        let possible = checkAll(
          horizont(array, i, j),
          vertical(array, i, j),
          squard(array, i, j)
        );
        if (possible.length == 1) {
          array[i][j] = possible[0];
        }
      }
    }
  }
  return array;
}
function finalCheck(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("-")) {
      goingThrough(arr);
      return finalCheck(arr);
    }
  }
  return (
    console.log("\t     (ツ) М О Л О Д Ц Ы! (ツ) \n\t\t★★★Это ПОБЕДА!★★★"),
    console.table(arr)
  );
}
console.table(puzzle);
console.table(finalCheck(puzzle));
module.exports = { goingThrough, finalCheck };
