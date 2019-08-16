let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function generateBoard(string) {
    let arr = [];
    let k = 0;
    for (let i = 0; i < 9; i++) {

        let tempArr = [];
        for (let j = 0; j < 9; j++) {

            tempArr.push(string[k]);
            // console.log(string[k]);
            k++;

        }
        // console.log(tempArr);
        arr.push(tempArr);
    }
    //  console.log(arr);
    return arr;
}
console.log(generateBoard(str));



function findPosition(board) {
    let position = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '-') {
                position.push(i, j);
                return position;
            }
        }
    }

    return true; //?!?!?!?!??!?!?!?!?!?!??!?!?!?!
}

function horizontal(position, board) { ///position [0,1] -kletka
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < board[position[0]].length; i++) { // i =postio[0]
        if (board[position[0]][i] != '-') allNumbers.push(board[position[0]][i]);
    }


    console.log('all numbers=== ', allNumbers);
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) possibleNumbers.push(basis[j]);
    }
    console.log('possible numbers == ', possibleNumbers);


    return possibleNumbers;
}

function vertical(position, board) {
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < board[position[0]].length; i++) { // i =postio[0]
        if (board[i][position[0]] != '-') allNumbers.push(board[i][position[0]]);
    }
    console.log('all numbers=== ', allNumbers);
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) possibleNumbers.push(basis[j]);
    }
    console.log('possible numbers == ', possibleNumbers);


    return possibleNumbers;
}



let board = generateBoard(str);//до рукурсии
let position = findPosition(board); //
let arr = vertical(position, board);
let arr1 = horizontal(position, board);
let arr2 = square(position, board);
let arr3 = allVariations(arr1,arr,arr2);
console.log(arr1);
console.log(arr);
console.log(arr2);
console.log(arr3);

 function square(position,board) {
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let sqrHor = Math.floor(position[0]/3);
    let sqrVert = Math.floor(position[1]/3);
    let startPoint = [sqrHor,sqrVert];
    for (let i = startPoint[0]; i < startPoint[0]+3; i++) {
        for (let j = startPoint[1]; j < startPoint[1]+3; j++) {
            allNumbers.push(board[i][j]);
        }
    }
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) possibleNumbers.push(basis[j]);
    }
    
    return possibleNumbers;
 }

function allVariations(horizontal,vertical,square) {
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(let i = 0; i < basis.length;i++) {
        if(horizontal.includes(basis[i])&&vertical.includes(basis[i])&&square.includes(basis[i])) {
            possibleNumbers.push(basis[i]);
        }
    }
    return possibleNumbers;
}




function getSolvedSudoku(board){

} 

////Логика
Рекурсия(board) {


    if  нет пустых строк  => return board;
     else идём дальше 

    findPossition - находим пустую клетку
    получаем по гор +верт+квадрат 
    находим все варианты и собираем allVariations собрать!

 цикл?! 
    бежим  пока не истратим все возможные варианты(allVariations.length===0) 
    if варианты нулёвые сразу return false;
    else  добавляем варианты?!? (allVariations) borad[i][j] =all Variations[i];
    прыгнем в рекурсию с новым бордом!!!

    if рекурсия false(тупиковая ветвь) , то берём следующий allVariation если можно (какое-то условие у него)
    перезаписываем борд
    else изначальное значение - ?
    и возвращаем false -???


    }
}
