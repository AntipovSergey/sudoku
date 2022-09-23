// получаем двумерный массив
const sudokuEmptyHorizontal = [
  [null, null, null, null, 3, null, null, 2, null],
  [3, 1, 3, null, null, null, null, null, null],
  [6, null, null, null, null, null, null, null, null],
  [8, null, null, null, null, null, null, null, null],
  [null, null, null, 10, null, null, null, null, null],
  [null, null, 8, null, null, 6, null, null, null],
  [3, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [1, null, null, null, null, null, 5, null, 4],
];

// делаем копию массива, транспорируем его по вертикали
// если мы введем значение в исходный массив, оно тут тоже отобразится
const makeVerticalSudokuClon = (sudokuEmptyHorizontal) => {
  const sudokuEmptyVertical = [...sudokuEmptyHorizontal]
  return sudokuEmptyHorizontal[0].map((col, c) => sudokuEmptyHorizontal.map((row, r) => sudokuEmptyHorizontal[r][c]))
}

console.table(sudokuEmptyHorizontal)
console.table(makeVerticalSudokuClon(sudokuEmptyHorizontal));

// создаем девять боксов, которые привязаны к исходному массиву и получают его значение 
// если мы введем значение в исходный массив, оно тут тоже отобразится
const makeNineBoxes = (sudokuEmptyVertical) => {
  const firstBox = [
    sudokuEmptyHorizontal[0][0], sudokuEmptyHorizontal[0][1], sudokuEmptyHorizontal[0][2],
    sudokuEmptyHorizontal[1][0], sudokuEmptyHorizontal[1][1], sudokuEmptyHorizontal[1][2],
    sudokuEmptyHorizontal[2][0], sudokuEmptyHorizontal[2][1], sudokuEmptyHorizontal[2][2]
  ]
  const secondBox = [
    sudokuEmptyHorizontal[0][3], sudokuEmptyHorizontal[0][4], sudokuEmptyHorizontal[0][5],
    sudokuEmptyHorizontal[1][3], sudokuEmptyHorizontal[1][4], sudokuEmptyHorizontal[1][5],
    sudokuEmptyHorizontal[2][3], sudokuEmptyHorizontal[2][4], sudokuEmptyHorizontal[2][5]
  ]
  const thirdBox = [
    sudokuEmptyHorizontal[0][6], sudokuEmptyHorizontal[0][7], sudokuEmptyHorizontal[0][8],
    sudokuEmptyHorizontal[1][6], sudokuEmptyHorizontal[1][7], sudokuEmptyHorizontal[1][8],
    sudokuEmptyHorizontal[2][6], sudokuEmptyHorizontal[2][7], sudokuEmptyHorizontal[2][8]
  ]
  const fourthBox = [
    sudokuEmptyHorizontal[3][0], sudokuEmptyHorizontal[3][1], sudokuEmptyHorizontal[3][2],
    sudokuEmptyHorizontal[4][0], sudokuEmptyHorizontal[4][1], sudokuEmptyHorizontal[4][2],
    sudokuEmptyHorizontal[5][0], sudokuEmptyHorizontal[5][1], sudokuEmptyHorizontal[5][2]
  ]
  const fifthBox = [
    sudokuEmptyHorizontal[3][3], sudokuEmptyHorizontal[3][4], sudokuEmptyHorizontal[3][5],
    sudokuEmptyHorizontal[4][3], sudokuEmptyHorizontal[4][4], sudokuEmptyHorizontal[4][5],
    sudokuEmptyHorizontal[5][3], sudokuEmptyHorizontal[5][4], sudokuEmptyHorizontal[5][5]
  ]
  const sixthBox = [
    sudokuEmptyHorizontal[3][6], sudokuEmptyHorizontal[3][7], sudokuEmptyHorizontal[3][8],
    sudokuEmptyHorizontal[4][6], sudokuEmptyHorizontal[4][7], sudokuEmptyHorizontal[4][8],
    sudokuEmptyHorizontal[5][6], sudokuEmptyHorizontal[5][7], sudokuEmptyHorizontal[5][8]
  ]
  const seventhBox = [
    sudokuEmptyHorizontal[6][0], sudokuEmptyHorizontal[6][1], sudokuEmptyHorizontal[6][2],
    sudokuEmptyHorizontal[7][0], sudokuEmptyHorizontal[7][1], sudokuEmptyHorizontal[7][2],
    sudokuEmptyHorizontal[8][0], sudokuEmptyHorizontal[8][1], sudokuEmptyHorizontal[8][2]
  ]
  const eighthBox = [
    sudokuEmptyHorizontal[6][3], sudokuEmptyHorizontal[6][4], sudokuEmptyHorizontal[6][5],
    sudokuEmptyHorizontal[7][3], sudokuEmptyHorizontal[7][4], sudokuEmptyHorizontal[7][5],
    sudokuEmptyHorizontal[8][3], sudokuEmptyHorizontal[8][4], sudokuEmptyHorizontal[8][5]
  ]
  const ninethBox = [
    sudokuEmptyHorizontal[6][6], sudokuEmptyHorizontal[6][7], sudokuEmptyHorizontal[6][8],
    sudokuEmptyHorizontal[7][6], sudokuEmptyHorizontal[7][7], sudokuEmptyHorizontal[7][8],
    sudokuEmptyHorizontal[8][6], sudokuEmptyHorizontal[8][7], sudokuEmptyHorizontal[8][8]
  ]
  const boxes = [
    firstBox, secondBox, thirdBox,
    fourthBox, fifthBox, sixthBox,
    seventhBox, eighthBox, ninethBox
  ];
  return boxes;
};
console.table(makeNineBoxes(sudokuEmptyHorizontal));

