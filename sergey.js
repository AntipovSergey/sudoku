







// Проверка правильности 
const checkElement = (x, y, board) => {
  let lineOfConnectedElements = [];
  let columnOfConnectedElements = [];
  let quadrateOfConnectedElements = [];
  const candidate = board[y][x];

  for (let i = 0; i <= board.length - 1; i++) {
    let quadrX0;
    let quadrY0;

    if (i !== x) lineOfConnectedElements[i] = board[y][i];    // формирование связаной с элементом СТРОКИ
    if (i !== y) columnOfConnectedElements[i] = board[i][x];  // ... связаного с элементом СТОЛБЦА

    // формирование связанного с элементом КВАДРАНТА
    if (i <= 2) {
      quadrX0 = 3 * Math.trunc(x / 3);
      quadrY0 = 3 * Math.trunc(y / 3);

      quadrateOfConnectedElements[i] = board[quadrY0][quadrX0 + i];
      quadrateOfConnectedElements[i + 3] = board[quadrY0 + 1][quadrX0 + i];
      quadrateOfConnectedElements[i + 6] = board[quadrY0 + 2][quadrX0 + i];
    }
  }
  quadrateOfConnectedElements.splice(quadrateOfConnectedElements.indexOf(candidate), 1);

  // Встречается ли кандидат в связанных строке, столбце или квадрате  
  if (lineOfConnectedElements.some(el => el === candidate) ||
    columnOfConnectedElements.some(el => el === candidate) ||
    quadrateOfConnectedElements.some(el => el === candidate)) {
    return false;
  }
  return true;
}

const doneOrNot = (board) => {
  const boardLength = board.length - 1;
  // checkCandidate(3, 3, board)
  for (let indexY = 0; indexY <= boardLength; indexY++) {
    for (let indexX = 0; indexX <= boardLength; indexX++) {
      // Проверка элемента на условия игры
      if (!checkElement(indexX, indexY, board)) {	// Элемент удовлетворяет условим игры?
        return 'Try again!';
      }
    }
  }
  return 'Finished!';
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]), '!!!!! Finished');

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 9],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]), '????? Try again');
