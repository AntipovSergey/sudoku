let pos = [8, 0]


let board = [
  [
    '1', '-', '5',
    '8', '-', '2',
    '-', '-', '-'
  ],
  [
    '-', '9', '-',
    '-', '7', '6',
    '4', '-', '5'
  ],
  [
    '2', '-', '-',
    '4', '-', '-',
    '8', '1', '9'
  ],
  [
    '-', '1', '9',
    '-', '-', '7',
    '3', '-', '6'
  ],
  [
    '7', '6', '2',
    '-', '8', '3',
    '-', '9', '-'
  ],
  [
    '-', '-', '-',
    '-', '6', '1',
    '-', '5', '-'
  ],
  [
    '-', '-', '7',
    '6', '-', '-',
    '-', '3', '-'
  ],
  [
    '4', '3', '-',
    '-', '2', '-',
    '5', '-', '1'
  ],
  [
    '6', '-', '-',
    '3', '-', '8',
    '9', '-', '-'
  ]
]

let num = 7;


function validate (num, pos, board) {
  let [r,c] = pos;
  let boxSize = 3;
  let size = 9;


      // проверка по горизонтали
      let checkHorizontal = board[r].join('').includes(String(num)) 
      // if (!(checkHorizontal) === false) return false

      for (let i = 0; i < size; i++) {
        if (!checkHorizontal && i !== r) return false;
      }

      // проверка по вертикали
      let lineVertical = ''
      for(let t = 0; t < 9; t++){
        lineVertical += board[r][t]
      }
      let checkVertical = lineVertical.includes(String(num))
      // if (!(checkVertical) === false) return false

      for (let i = 0; i < size; i++) {
        if (!checkVertical && i !== c) return false;
      }

      //проверка в квадрате
      let lineBox = ''
      const boxRow = Math.floor(r/boxSize) * boxSize
      const boxCol = Math.floor(c/boxSize) * boxSize
      for (let i = boxRow; i < boxRow + boxSize; i += 1) {  /**проверка по всему сектору */
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {  /** делаем 2 вложенных цикла */
        if (board[i][j] === num && i !== r && j !== c) {  /** проверяем текущую позицию */
          return false;
        }
      }
    }

      return true
}

console.log(validate(num, pos, board))
