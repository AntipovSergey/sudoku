const fs = require('fs'); // обращаемся к файловой системе


// Первое судоку из файла

function parsing() {
  const arrPuzzle = fs.readFileSync('./puzzles.txt','utf-8'); // функция принимает на вход данные из подключенного текстового файла
  const str = arrPuzzle.split('\n'); // разделяем по переносу строки исходную строку
  const board = []; 
  const newStr = str[0].split(''); //разделяем первую строку массива 
   for (let i = 0; i < newStr.length; i++) { // с помощью цикла разделили на массив из 9 элементов
    board.push(newStr.splice(0, 9));
  }
  return board;
} // результат фукнции возвращает многомерный массив из исходной первой строки (судоку)


module.exports = {
    parsing,
}