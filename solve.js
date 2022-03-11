function solve(boardString) {
  const currentPos = findEmpty(board);
  if (currentPos = null){
    return true;
  }
  for (let i = 1; i < 10; i += 1) {
    const currentNum = i.toString();
    const valid = validate(currentNum, currentPos, board)
    if(valid) {
      const [x, y] = currentPos; // 2 переменные
      board[x, y] = currentNum; 
      // если текущее число валидно, меняем борд, присваиваем значение, которое хранится в currentNum
      if(solve()) { // решает оставшийся борд с текущим currentNum, если фолс ,выходим из текущей итерации цикла и подставляем др число
        return true; // если во всех вложенных циклах возвращается тру, ретерн тру
      }
      board[x, y] = '.'; // если фолс, в if не попадем ,нужно переприсвоить пустое значение
    }
  }
  return false
  // console.log('first changes');
}
