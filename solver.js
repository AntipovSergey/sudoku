function createField() {
  const field = [];
  for (let i = 0; i < 9; i++) {
    let fieldString = new Array(9).fill(null);
    field.push(fieldString);
  }
  // todo

  return field;
}

function fillField(field) {
  // todo

  return //nothing;
}


function isLast(cell) {
  return cell[0] === 9 && cell[1] === 9;// todo
  // true?false
}

function isEmpty(cell) {
  // todo
  return // true?false
}

function addNumInField(field, cell, num) {
  // todo
  field[cell[0]][cell[1]] = num

  return // nothing;
}

function nextCell(cell) {
  // todo
  return // cell
}

function clearCell(cell) {
  // todo
  field[cell[0]][cell[1]] = null;
  return // nothing
}

function getNums(field, cell) {
  function checkVertical(cell, num) {
    for (let i = 0; i < 9; i++) {
      if (field[i][cell[1]] === num) return false;
    }
    return true;
  }

  function checkHorisontal(cell, num) {
    for (let i = 0; i < 9; i++) {
      if (field[cell[0]][i] === num) return false;
    }
    return true;
  }

  function checkSquare(cell, num) {
    const xShift = Math.floor(cell[0] / 3)*3;
    const yShift = Math.floor(cell[1] / 3)*3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (field[xShift + i][yShift + j] === num && !(xShift + i === cell[0] && yShift + j === cell[1])) {
          return false;
        }
      }
    }
    return true;
  }

  function checkNum(cell, num) {
    return checkVertical(cell, num) && checkHorisontal(cell, num) && checkSquare(cell, num);
  }

  let correct = [];
  for (let i = 1; i <= 9; i++) {
    if (checkNum(cell, num)) correct.push(i);
  }
  return correct; //array of correct nums to fill in cell
}


// main func solver

function solver(field, cell) {  // cell = [x,y]
  if (isLast(cell)) return field;

  if (isEmpty(cell)) {
    let nums = getNums(field, cell);
    if (!nums) return [];

    for (let i = 0; i < nums.length; i++) {
      addNumInField(field, cell, nums[i]);
      let tmp = solver(field, nextCell(cell));
      if (tmp) {
        return tmp;
      } else {
        clearCell(cell);
        return [];
      }
    }
  } else {
    let tmp = solver(field, nextCell(cell));
    if (tmp) {
      return tmp
    } else {
      return [];
    }
  }

}
