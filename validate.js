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
  let [r,c] = pos
  let boxSize = 3


      // проверка по горизонтали
      let checkHorizontal = board[r].join('').includes(String(num)) 
      if (!(checkHorizontal) === false) return false


      // проверка по вертикали
      let lineVertical = ''
      for(let t = 0; t < 9; t++){
        lineVertical += board[r][t]
      }
      let checkVertical = lineVertical.includes(String(num))
      if (!(checkVertical) === false) return false

      //проверка в квадрате
      let lineBox = ''
      const boxRow = Math.floor(r/boxSize) * boxSize
      const boxCol = Math.floor(c/boxSize) * boxSize
      for(let j = boxRow; j < boxRow + boxSize; j++) {
        for (let t = boxCol; t < boxCol + boxSize; t++) {         
          lineBox += board[j][t]
        }
      }
      let checkBox = lineBox.includes(String(num))
      if (!(checkBox) === false) return false

      return true
}

console.log(validate(num, pos, board))
