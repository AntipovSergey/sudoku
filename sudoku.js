function solve(str) {
  console.log('Зашифрованное судоку')
  prettyBoard(str)
  let newarr = str.split('');
  let arr = [];
  for (let i = 0; i < newarr.length; i++) {
    arr.push(newarr.splice(0, 9));
  }

  let m = 0;
  let n = 0;
  let check = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      check = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (arr[i][j] == '-') {
        for (let k = 0; k < arr.length; k++) {
          if (check.includes(arr[i][k])) {
            check.splice(check.indexOf(arr[i][k]), 1)
          }
          if (check.includes(arr[k][j])) {
            check.splice(check.indexOf(arr[k][j]), 1)
          }
        }
        x = Math.floor(i / 3);
        y = Math.floor(j / 3);
        for (m = 0 + x * 3; m < 3 + x * 3; m++) {
          for (n = 0 + y * 3; n < 3 + y * 3; n++) {
            if (check.includes(arr[m][n])) {
              check.splice(check.indexOf(arr[m][n]), 1)
            }
          }
        }

        if (check.length == 1) {
          arr[i][j] = check[0];
          i = -1; j = -1; break;
        }
      }
    }
  }

  let arr2 = (arr.join('')).replace(/,/g, '')
  console.log('\nРасшифрованное судоку')
  prettyBoard(arr2)
  return arr;
}

function isSolved(board) {
  return true
}

function prettyBoard(str) {
  let newarr2 = [...[...str]];
  let newarr1 = [];
  let string = '';
  for (let i = 0; i < newarr2.length; i++) {
    newarr1.push(newarr2.splice(0, 9));
    string = newarr1[i].join(' ');
    console.log(string);
  }
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
