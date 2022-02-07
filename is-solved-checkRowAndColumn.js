function checkRaw(board) {
  let raws = [];
  for (let i = 0; i < 81; i += 9) {
    raws.push(board.slice(i, i + 9).split(''))
  }

  let counter = 0
  for (let i = 0; i < raws.length; i += 1) {
    for (let j = 0; j < raws[i].length; j += 1) {
      if (raws[i].indexOf(raws[i][j]) !== raws[i].lastIndexOf(raws[i][j])) {
        counter += 1
      }
    }
  }
  return counter > 0 ? false : true
}

//console.log(checkRaw('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))
//console.log(checkRaw('122456789456789123789123456214365897365897214897214365531642978642978531978531642'))


function checkColumn(board) {
  const raws = [];
  for (let i = 0; i < 81; i += 9) {
    raws.push(board.slice(i, i + 9).split(''));
  }

  const columns = [];
  for (let i = 0; i < raws[0].length; i += 1) {
    const columnsItem = [];
    for (let j = 0; j < raws.length; j += 1) {
      columnsItem.push(raws[j][i]);
    }
    columns.push(columnsItem);
  }
  let counter = 0
  for (let i = 0; i < columns.length; i += 1) {
    for (let j = 0; j < columns[i].length; j += 1) {
      if (columns[i].indexOf(columns[i][j]) !== columns[i].lastIndexOf(columns[i][j])) {
        counter += 1
      }
    }
  }
  return counter > 0 ? false : true
}


//console.log(checkColumn('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))
//console.log(checkColumn('122456789456789123789123456214365897365897214897214365531642978642978531978531642'))

module.exports = {checkRaw, checkColumn}
