function validSolution(board) {
  //Row
  const chekRowBoard = board.map((el) => {
    if (el.includes(0)) {
      return false;
    }
    return new Set(el).size == el.length;
  });

  let arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      arr.push(board[j][i]);
    }
  }

  //Column

  let column = [];
  for (let i = 0; i < 9; i++) {
    let arr1 = arr.slice();
    column[i] = arr1.splice(i * 9, 9);

  }

  const chekColumnBoard = column.map((el) => {
    return new Set(el).size == el.length;
  });

  //Cub

  let arrCub = [];
  let begin = 0;
  let end = 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = begin; k < end; k++) {
        arrCub.push(board[j][k]);
      }
    }
    begin += 3;
    end += 3;
  }

  let cub = [];
  for (let i = 0; i < 9; i++) {
    let arrCub1 = arrCub.slice();
    cub[i] = arrCub1.splice(i * 9, 9);

  }
  const chekCub = cub.map((el) => {
    return new Set(el).size == el.length;
  });

  if (
    chekRowBoard.includes(false) ||
    chekCub.includes(false) ||
    chekColumnBoard.includes(false)
  ) {
    return false;
  }

  return true;
}


