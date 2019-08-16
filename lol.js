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
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
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



let board = generateBoard(str);
let position = findPosition(board);
let arr = vertical(position, board);


// function vertical();
console.log(arr);
// function square();
// function allVariations();
// ////////////////
//проверка инклюдов
// let x = [1,2,4,5];
// let temp = [];
// let y=[1,2,3,4,5,6,7,8,9];
// for(let i = 0; i < 9 ; i ++) {

//     // if ( !x.includes(i) )temp.push(i);
//     if( !x.includes(y[i]) )temp.push(y[i]);


// }
// console.log(temp);
///проверка инклюдов
//////
// function possibleGor (arr) {
//     let arr=[];
//     for(let i = 0;i < 9;i++) {
//         obj["gor"] = i;
//         for(let j = 0;j < 9;j++) {
//             obj["vert"] =j;
//             if(arr[i][j]!=='-') {

//                 obj[arr[i][j]] = true;
//             }

//         }
//         console.log(obj);
//     }


// }
// let massGor = [3,5,'-','-',7];
// let varr = [];
// let x = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i <8;i++) {

//     if(massGor.includes(x[i])===false) {
//          varr.push(x[i]);
//     }

// }
// console.log(varr);
// //FInal variasions!!
// varr1 = [1,3,6];
// varr2 = [1,6,7];
//  x = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i < 8;i++) {
//     if(varr.includes(x[i])&&varr1.includes(x[i])&&varr2.includes(x[i]))
//     console.log(x[i]);//1,6
// }


//////Логика
// Рекурсия(board) {


//     Есть ли пустые строки?вернуть board!!


//     allVariations собрать!

//     бежим по рекурсии пока не истратим все возможные варианты ветки(return false)
//     {
//     если варианты нулёвые сразу return false;
//     добавляем варианты?!?
//     if рекурсия false , то берём следующий allVariation (какое-то условие у него)
//     else изначальное значение - ?
//     и 


//     }
// }
