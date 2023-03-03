function solve() {
  const empty = checkingForEmpty(puzzle); // Присвоили переменной проверку на наполнение ячейки
  if (empty === null) {
    return true;
  }
  for (let i = 1; i < size + 1; i++) {
    const current = i.toString(); // Переводим элемент массива к строке и присваиваем переменной
    const isValid = validate(current, position, board); // Присвоили переменной  функцию проверки на валидность

    if (isValid) {
      // Если срабатывает функция
      const [x, y] = position;
      board[x][y] = current;
      if (solve()) {
        return true;
      }
      board[x][y] = "-";
    }
  }
  return false;
}
