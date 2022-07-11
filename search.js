let indArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 19, 20, 28, 37, 46, 55, 64, 73];
let fullArr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
fullArr = fullArr.split('');

function search(fullArr, indexArr, el = 1, result = []) {
  for (let i = 0; i < indexArr.length; i++) {
    if (fullArr[indexArr[i]] == el && el <= 9) {
      return search(fullArr, indexArr, el += 1, result);
    }
    
  }
  result.push(el);
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
