const fs = require('fs');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
   
 const size = 9;
 const boxSize = 3;
function solve(boardString) {
  
let puzzles = fs.readFileSync('./puzzles.txt','utf-8').split('\n');
puzzles.filter(function(line){
  return line !='';
});
let puzzleNumber = puzzles[process.argv[2]|| 0];

// console.log(puzzleNumber);


 let massiv = [];
  for(let i =0; i<puzzleNumber.length; i=i+9){
    massiv.push(puzzleNumber.slice(i, i+9).split('').filter((line) => line !== ''));
  }
  return massiv;
 


}
console.log(solve());


const validate = (num, pos, puzzleNumber)=>{
  const[r,c]=pos;

  // 1.Проверка строк
  for(let i =0; i< size; i++){
    if(puzzleNumber[i],[c]===num && i!==r){
      return false;
    }
  }
   // 2.Проверка столбцов
   for(let i =0; i< size; i++){
    if(puzzleNumber[r],[i]===num && i!==c){
      return false;
    }
  }


  // 3.Проверка квадрата из 9 чисел на повторение чисел
  // Сначала вычислим позицию элемента в нашем секторе для строк
  const boxRow = Math.floor(r/boxSize)*boxSize; 
  // Такую же конструкцию повторям и для столбцов
  const boxCol = Math.floor(c/boxSize)*boxSize; 
//  Проверка по всему квадрату на повторение чисел, поэтому делаем два вложенных цикла:
for(let i = boxRow; i<boxRow + boxSize; i++){
  for(let j =boxCol; j<boxCol+ boxSize; j++){
    if(puzzleNumber[i][j]===num && i!==r && j!==c){
      return false;
    }
  }
}
return true;

}






 

 const boardr= '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(sudokuStr) {

const size = 9;     // длина сектора
const boxSize = 3  // размер сектора

  const findEmpty = (board) => {         // функция возвращает пустую позицыю в матрице
    for (let r = 0; r < size; r++) {     // проходим цыклом по строкам 
        for (let c = 0; c < size; c++) { // проходим цыклом по столбцам
            if(board[r][c] === '.') {    // проверям пустой ли елемент по заданым корденатам
                return [r,c];            // возвращае масив с местом в строке, и место в колонке
            }
        }
    }
    return null;
 } 
 findEmpty()


  
}
solve(sudokuStr)





const solve = () => {                                              //создаем перебирающую функцию
    const currPos = findEmpty(board)                                  // создаем переменную в которую передаем функцию, которая
                                                                       // ищет незаполненные ячейки таблицы
        if (currPos === null) {                                       //если пустых позиций нет то.
          return true                                                 //возвращаем true, значит текущая табл. верна. Решение найдено
        }   
        
        for (let i = 1; i < size+1; i++) {                          // пишем цикл который будет подствлять значения в пустые позиции
          const currNum = i.toString();                        //i=1 - т.к. это числа которые мы будем подставлять в пустые поз-ции
                                                                //i<size - 1 (i меньше ширины нашей таблицы (9)). создаем currNumm и перед. i в виде строки
          const validate = validate(currNum, currPos, board)            // вызываем ф-цию validate кот. принмаает подбир. число; позицию незаполненн. ячейки и саму таблицу
           
          if (isValid) {                                            // если фукция isValid возвр. true
              const [x,y] = currPos;                              // то  присваиваем значения x y = currPos(позицию пустого элемента)  
              board[x.y] = currNum;                               // изменяем таблицу подставляем  значения currNum
              
              if ( solve()) {                                     //если  
                    return true
                }
                board[x.y] = ".";
            
            }
        
        }



        return false
   }  
   solve();

console.log(solve(boardString))
 /**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {




}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}






// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
