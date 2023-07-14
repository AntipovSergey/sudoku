function prettyBoard(board) { //принимает массив массивов
    let consoleView = board.flat(2)
    consoleView.map((el) => {
    if (el === "-") {
      return (el = " ");
    } else {
      return el;
    }
  });
  let gensubArrs = [];
  for (let i = 0; i < consoleView.length; i += 3) {
    let subArr = consoleView.slice(i, i + 3);
    subArr.push("|");
    gensubArrs.push(subArr);
  }
  consoleView = gensubArrs.flat();
  let genArr = [];
  for (let i = 0; i < consoleView.length; i += 12) {
    let subArr = consoleView.slice(i, i + 12);
    subArr.pop();
    genArr.push(subArr);
  }
  consoleView = genArr.join("\n").replaceAll(/[,]/gm, " ");

  consoleView =
    consoleView.substring(0, 65) +
    "\n" +
    "---------------------" +
    "\n" +
    consoleView.substring(66, 131) +
    "\n" +
    "---------------------" +
    "\n" +
    consoleView.substring(132, 197);

  return consoleView;
}

module.exports = prettyBoard;
