const { parsing } = require("./parsing");
const fs = require('fs');
const arrPuzzle = fs.readFileSync('./puzzles.txt','utf-8');


const parsResult = parsing(); //результат выполнения функции парсинг записали в промежуточную переменную, которую передаем на вход новой функции
// console.log(parsResult); 


function findEmpty(parsResult) { //функция поиска незаполненной ячейки в исходном многомерном массиве
    const size = 9; 
        for (let r = 0; r < size; r++) { //проходим по длине строки, затем по столбцам
            for (let c = 0; c < size; c++) {
                if(parsResult[r][c] === '-') { // если ячейка содержит символ -, значит она пустая
                    return [r,c]; //возвращаем ее координаты (индекс строки и столбца)
                }
            }
        }
        return null; //если таблица заполнена полностью
    }

// console.log(findEmpty());


module.exports = {
    parsing,
    findEmpty,
}