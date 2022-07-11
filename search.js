// let indArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 28, 37, 46, 55, 64, 73];
let fullArr = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];

function searchEl(fullArr, indexArr, el = 1) {
  for (let i = 0; i < indexArr.length; i++) {
    if (fullArr[indexArr[i]] == el && el <= 9) {
      return searchEl(fullArr, indexArr, el += 1);
    }
  }
  return el;
}

function search(fullArr, indArr) {
  let element = searchEl(fullArr, indArr);
  let result = [];
  // result.push(element);
  for (let i = element; i < 9; i++) {
    result.push(searchEl(fullArr, indArr, i))
  }
  return result;
}

console.log(search(fullArr, indArr));

/*
1 - 5 | 8 - 2 | - - -
- 9 - | - 7 6 | 4 - 5
2 - - | 4 - - | 8 1 9
---------------------
- 1 9 | - - 7 | 3 - 6
7 6 2 | - 8 3 | - 9 -
- - - | - 6 1 | - 5 -
---------------------
- - 7 | 6 - - | - 3 -
4 3 - | - 2 - | 5 - 1
6 - - | 3 - 8 | 9 - -
*/
