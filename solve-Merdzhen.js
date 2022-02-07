function solve(boardString) {
  const raws = [];
  for (let i = 0; i < 81; i += 9) {
    raws.push(boardString.slice(i, i + 9).split(''));
  }

  const columns = [];
  for (let i = 0; i < raws[0].length; i += 1) {
    const columnsItem = [];
    for (let j = 0; j < raws.length; j += 1) {
      columnsItem.push(raws[j][i]);
    }
    columns.push(columnsItem);
  }

  const blocks = [];
  for (let j = 0; j < 81; j += 27) {
    for (let i = j; i < (j + 7); i += 3) {
      const blockItem = [];
      blockItem.push(boardString[i], boardString[i + 1], boardString[i + 2], boardString[i + 9], boardString[i + 10], boardString[i + 11], boardString[i + 18], boardString[i + 19], boardString[i + 20]);
      blocks.push(blockItem);
    }
  }

  // идем по массиву raws, ищем пустую ячейку
  // для пустой ячейки ищем возможные значения
  // подставляем первое, идем на следующую пустую ячейку
  // если получается ошибка - нет возможных значений, возвращаемся на ячейку назад
}

// console.log(solve('123456798457198236869237145214365987375981462698724351531679824946812573782543619'));

function isEmpty(cell) {

}
