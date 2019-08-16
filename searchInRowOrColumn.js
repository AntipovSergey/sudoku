let incorrectNumbers = {};

function searchInRowOrCol(arr, isCol = false, i = 0, j = 0) {
  if (isCol) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i][j] != "") {
        incorrectNumbers[arr[i][j]] = true;
      };
    };
  } else {
    for (j = 0; j < arr.length; j++) {
      if (arr[i][j] != "") {
        incorrectNumbers[arr[i][j]] = true;
      };
    };
  }
}


module.exports = {
  searchInRowOrCol: searchInRowOrCol,
}