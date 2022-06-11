const { log } = require('console');
const fs = require('fs');


//--------------------------Получаем информацию из файла----------------
function getInfo() {
    const readBoard = fs.readFileSync ('sudoku-puzzles.txt', 'utf8')
    const numOfSudoku = process.argv[2]
    const line = readBoard.split('\n')[numOfSudoku];
    return line
}
//----------------------------Превращаем информацию в массив----------------

function infoToArray (info) {
    let startArr = info.split('')
    let res = []
    let tempRes = []

    for (let i = 0; i < 9; i++) {
        for (let j = i*9; j < i*9+9; j++) {
            tempRes.push(startArr[j])
        }
        res.push(tempRes)
        tempRes = [];
    }
    return res
}
//--------------------------------Получили массив с 9 строками--------------







//---------------------------------Вычисляем возможные варианты по горизонтали-----------------
function findHor(array, numRow) {
    const varsH = []
    const vars = '123456789'.split('')
    const str = array[numRow].join('').split('-').join('').split('');
    return varr = vars.filter((item) => {
            if (str.includes(item)) {
            } else { return item}
        }).map((item)=>{return +item})
    }
//------------------------------Получили массив вариантов по строкe------------------------






//---------------------------------Вычисляем возможные варианты по вертикали-----------------
function findVer(array, numCol) {

    const transpose = matrix => matrix[0].map((_, i) => matrix.map(row => row[i])); //транспонируем матрицу
    const baseMatrix = array
    const transposedMatrix = transpose(baseMatrix);
    
    return findHor(transposedMatrix, numCol)
}
//----------------------------------Получил массив вариантов по столбцy----------------------------------






//-----------------------------------Вычисляем возможные варианты квадрата------------------------------
function findSq(array, numRow, numCol) {
    let SqRow = Math.floor(numRow/3) 
    let SqCol = Math.floor(numCol/3)
    const vars = '123456789'.split('')
    res = []
    for (let i = 3*SqRow; i < 3*SqRow+3; i++) {
        for (let j = 3*SqCol; j < 3*SqCol+3; j++) {
            res.push(array[i][j])
        }
    }; 
    r = res.join('').split('-').join('').split('');
    //console.log('r', r);
    return resS = vars.filter((item) => {
        if (r.includes(item)) {
        } else { return item}
    }).map((item)=>{return +item})
}
//-----------------------------------Получили массив вариантов по квадрату------------------------------





//-----------------------------------Ищем общие варианты---------------------------------------------

function finalVars(array, numRow, numCol) {
    let h = findHor(array, numRow)
    //console.log(h);
    let v = findVer(array, numCol)
    //console.log(v);
    let s = findSq(array, numRow, numCol)
    //console.log(s);
    const var1 = h.filter(item => v.includes(item));
    const var2 = s.filter(item => var1.includes(item));
    return var2
}
//------------------------------------Получили общие варианты-----------------------------------







//----------------------------------Отгадываем судоку-------------------------------------
function runner (array) {

    let checkArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            checkArr.push(array[i][j])
        }
    }


    while (checkArr.includes('-')) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[i][j] === '-' && finalVars(array, i, j).length == 1) {
                 array[i].splice(j,1,finalVars(array, i, j)[0])
                }
            }
        } 
        checkArr = []
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                checkArr.push(array[i][j])
                }
            }
    }
    return (array)
}
//---------------------------------------------Получили отгаданный судоку------------------------






//-----------------------делаем понятный вывод--------------------

function disp (array) {
    let arr = [...array]
    console.log();
    console.log(' -------------------------------');
    for (let i = 0; i < array.length; i++) {
        arr[i].splice(0,0,' | ')
        arr[i].splice(11,0,' | ')
        arr[i].splice(4,0,' | ')
        arr[i].splice(8,0,' | ')
        let res = arr[i].join(' ')
        if (i === 3 || i === 6) {
        console.log(' |---------+---------+---------|');
        }
        console.log(res);
    }
    console.log(' -------------------------------');
    console.log('');
}
//-----------------------вывели результат-------------------------



const info = getInfo()
const startArray = infoToArray (info); 
let result = runner (startArray)
disp(result);