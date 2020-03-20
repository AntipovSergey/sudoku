function createField() {
  const field = [];
  for (let i = 0; i < 9; i++) {
    let fieldString = new Array(9).fill(null);
    field.push(fieldString);
  }
  return field;
}

function fillField(field, input) {
  let stringIndex = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (input[stringIndex] !== '-') {
        field[i][j] = +input[stringIndex];
      }
      stringIndex++;
    }
  }
  return;
}

function isLast(x, y) {
  return x === 9 && y === 0;
}

function isEmpty(x, y) {
  if (field[x][y] === null) {
    return true
  }
  return false
}

function addNumInField(field, x, y, num) {
  field[x][y] = num
  console.table(field);
  return;
}

function nextCell(x, y) {
  if (x <= 8 && y <= 7) {
    y++;
  } else if (y === 8) {
    x++;
    y = 0;
  }
  return [x, y];
}


function clearCell(x, y) {
  field[x][y] = null;
  console.table(field);
  return;
}

function getNums(field, x, y) {
  function checkVertical(x, y, num) {
    for (let i = 0; i < 9; i++) {
      if (field[i][y] === num) return false;
    }
    return true;
  }

  function checkHorisontal(x, y, num) {
    for (let i = 0; i < 9; i++) {
      if (field[x][i] === num) return false;
    }
    return true;
  }

  function checkSquare(x, y, num) {
    const xShift = Math.floor(x / 3) * 3;
    const yShift = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (field[xShift + i][yShift + j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function checkNum(x, y, num) {
    return checkVertical(x, y, num) && checkHorisontal(x, y, num) && checkSquare(x, y, num);
  }

  let correct = [];
  for (let i = 1; i <= 9; i++) {
    if (checkNum(x, y, i)) correct.push(i);
  }
  return correct; //array of correct nums to fill in cell
}


// main func solver

function solver(field, x = 0, y = 0) {
  console.log(x, y)  // cell = [x,y]
  if (isLast(x, y)) return field;

  if (isEmpty(x, y)) {
    let nums = getNums(field, x, y);
    if (nums.length === 0) {
      return [];
    };

    for (let i = 0; i < nums.length; i++) {
      addNumInField(field, x, y, nums[i]);
      let cell = nextCell(x, y);
      let tmp = solver(field, cell[0], cell[1]);
      if (tmp > 0) {
        return tmp;
      }
    }
    clearCell(x, y);
    return [];
  } else {
    let cell = nextCell(x, y);
    let tmp = solver(field, cell[0], cell[1]);
    if (tmp.length > 0) {
      return tmp
    } else {
      return [];
    }
  }

}
const data = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let field = createField();
fillField(field, data);
console.table(solver(field));


