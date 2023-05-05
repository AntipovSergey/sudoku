function isSolvedVertical(number, board) {
  const result = [];
  for (let i = 0; i < board.length; i++) {
    result.push([]);

    //задал цикл, чтобы создась  новых пустых массивов
    for (let j = 0; j < board[i][0].length; j++) {
      result[i].push(board[j][0].split("")[i]);
    }
  }
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i].includes(number.toString())) {
      return true;
    }
  }
  return false; //фолз выносим за цикл. Если оставить внутри цикла, то то цикл фор остановится на первом столбце,как только найдет значение
}
module.exports = isSolvedVertical; //пишем,что импортируем и название функции,которую импортируем
