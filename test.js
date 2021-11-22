const text = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function sudokuParse(tex) {
  const puzzle = tex.replaceAll('-', '0').split('');
  const tempArray = [];
  let num = 9;
  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      tempArray[i][j] = Number(tempArray[i][j]);
    }
  }
  console.table(tempArray);
  return tempArray;
}

const board = sudokuParse(text);

function checkGV(arr, x, y) {
  let arrDop = [];
  for (let i = 0; i < arr; i++) {
    arrDop.push(arr[i][y]);
  }

  for (let i = 1; i <= 9; i++) {
    if (!arr[x].includes(i) && !arrDop.includes(i)) {
      return i;
    }
  }
}
console.log(checkGV(board, 0, 6));
