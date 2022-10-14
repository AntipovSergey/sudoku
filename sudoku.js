// Подключаю Fs и настраиваю его (Игорь)
const fs = () => {

};

// Функция прохода горизонталь и вертикаль (Саша)
const checkerRowColumn = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr[i].length; j++) {
      for (let g = 0; g < arr[i][j].length; g++) {
        if (arr[i][j] === '-') arr[i][j].replace(func);
      }
    }
  }
};

// Функция прохода коробки 3х3

const checkerBox = () => {

};

// Функция, которая проверяет можно ли точно подставить числа

const currentNums = () => {

};

module.exports = {
};
