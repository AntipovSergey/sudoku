function createField() {
  // todo

  return field;
}
function fillField(field) {
  // todo

  return //nothing;
}


function isLast(cell) {
  // todo
  return // true?false
}

function isEmpty(cell) {
  // todo
  return // true?false
}

function addNumInField(field, cell, num){
  // todo
  return // nothing;
}

function nextCell(cell){
  // todo
  return // cell
}

function clearCell(cell){
  // todo
  return // nothing
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
