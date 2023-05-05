function isSolvedVertical(number, board) {
  const result = [];
  for (let i = 0; i < board.length; i++) {
    result.push([]);
    for (let j = 0; j < board[i].length; j++) {
      result[i].push(board[j][i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i].join("").includes(number)) {
      return true;
    }
  }
  return false; //фолз выносим за цикл. Если оставить внутри цикла, то то цикл фор остановится на первом столбце,как только найдет значение
}
module.exports = isSolvedVertical; //пишем,что импортируем и название функции,которую импортируем
