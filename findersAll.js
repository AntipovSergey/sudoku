


stopPosition = {}

function generateBoard(field) {
  let board = document.querySelector('#game');
  for (let i = 0; i < field.length; i++) {
      let tr = document.createElement('tr');
      tr.id = `r${i}`
      board.appendChild(tr)
      for (let j = 0; j < field[i].length; j++) {
          let td = document.createElement('td');
          td.id = `r${i}c${j}`;
          td.classList.add('cell');
        if (typeof field[i][j] !== 'object') {
          td.innerText = field[i][j];
        }
          tr.appendChild(td);
      }
  }
}
function findAll(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[i][j]) {
        incorrectNumbers = {};
        let numsArr = [];
        searchInRowOrCol(arr, isCol = false, i, j);
        searchInRowOrCol(arr, isCol = true, i, j);
        findInSquare(arr, i, j);
        for (let k = 1; k < 10; k++) {
          if (!incorrectNumbers[k]) {
            numsArr.push(k);
          }
        }
        arr[i][j] = numsArr;
      }

    }
  }
  let find=false
  for (let i = arr.length-1; i >0 && find==false ; i--) {
    for (let j = arr[i].length-1; j > 0 && find ==false; j--) {
      if (typeof arr[i][j] == 'object') {
        stopPosition.row = i;
        stopPosition.col = j;
        find=true
      }
    }
    
  }
  return arr;
}


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


function findInSquare(arr, i = 0, j = 0) {

  let borders = defineBoarders(i, j);

  for (let i = borders.top; i <= borders.bottom; i++) {
    for (let j = borders.left; j <= borders.right; j++) {
      if (arr[i][j]) {
        incorrectNumbers[arr[i][j]] = true;
      }
    }
  }
}


function defineBoarders(i, j) {

  let borders = {};

  if (i / 3 < 1) {
    borders.top = 0;
    borders.bottom = 2;
  } else if (i / 3 < 2) {
    borders.top = 3;
    borders.bottom = 5;
  } else {
    borders.top = 6;
    borders.bottom = 8;
  }

  if (j / 3 < 1) {
    borders.left = 0;
    borders.right = 2;
  } else if (j / 3 < 2) {
    borders.left = 3;
    borders.right = 5;
  } else {
    borders.left = 6;
    borders.right = 8;
  }
  return borders;
}


function convertInputString(str) {
  let outPut = [];
  let start = 0;
  let end = 9;
  for (let i = 0; i < 9; i++) {

    let temp = str.slice(start, end)
    outPut.push(temp.split(''));
    start += 9;
    end += 9;

  }
  for (let i = 0; i < outPut.length; i++) {
    outPut[i] = outPut[i].map(function (elem) {
      if (elem === '-') {
        return elem = ""
      } else {
        return +elem;
      }
    });
  }
  return outPut;
}



