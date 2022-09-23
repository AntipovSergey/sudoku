function validate (num, pos, board) {
  let [r,c] = pos

      // проверка по горизонтали
      const checkHorizontal = !(board[r].join('').includes(String(num))) 

      // проверка по вертикали
      let lineVertical = ''
      for(let t = 0; t < 9; t++){
        lineVertical += board[t][c]
      }
      const checkVertical = !(lineVertical.includes(String(num)))

      //проверка в квадрате
      let lineBox = ''
      const boxRow = Math.floor(r/3) * 3
      const boxCol = Math.floor(c/3) * 3
      for(let j = boxRow; j < boxRow + 3; j++) {
        for (let t = boxCol; t < boxCol + 3; t++) {         
          lineBox += board[j][t]
        }
      }
      const checkBox = !(lineBox.includes(String(num)))

  if (checkHorizontal || checkVertical || checkBox) return false
  if (checkHorizontal && checkVertical && checkBox) return true
}
