const findEmpty // тут будет функция Оли, которая ищет пустые значения
const board // тут будет функция Юры, которая возвращает нам массив судоку
const size = 9;
const boxSize = 3; 
const validate // тут будет функция Оли, проверяющая валидность, подставляемого числа

const solve = () => {
  const currPos = findEmpty(board);

  if (currPos === null) {
    return true;
  }
   for (let i = 0; i < size + 1 ; i++) {
    const currNum = i.toString();
    const isValid = validate(currNum, currPos, board);

    if (isValid) {
      const [x, y] = currPos;
      board[x][y] = currNum;

      if(solve()) {
        return true;
      }
      board[x][y] = '.';
    }
   }
   return false;
}
