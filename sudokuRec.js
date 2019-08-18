
// let strTest = '1--9567389631874528573421694312985767964358215827613946798132453156249872485796--';
// let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// str = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
// str = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
// str = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
// str = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
// str = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
// str = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
// str = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
// str = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
// str = '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--';
// str = '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-';
// str = '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-';
// str = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';
// str = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
const str = '---------------------------------------------------------------------------------';
//функция превращает строку в двумерный масссив
function generateBoard(string) {
    let arr = [];
    let k = 0;
    for (let i = 0; i < 9; i++) {
        let tempArr = [];
        for (let j = 0; j < 9; j++) {
            tempArr.push(string[k]);
            k++;
        }
        arr.push(tempArr);
    }
    return arr;
}
//функция ищет позицию первого пробела с массиве и возвращает 
//координаты i,j в массиве как [0] и [1] индекс массива.
function findPosition(board) {
    let position = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '-') {
                position.push(i,j);
                return position;
            }
        }
    }

    return false; //?!?!?!?!??!?!?!?!?!?!??!?!?!?!
}
//функция формирует все возможные числа в строке по заданным координатам position
function horizontal(position, board) { 
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(let i = 0; i < board[position[0]].length; i++) { 
        if (board[position[0]][i] != '-') {
            allNumbers.push(board[position[0]][i]);
        }
    }
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) possibleNumbers.push(basis[j]);
    }
    return possibleNumbers;
}
//функция формирует все возможные числа в столбце по заданным координатам position
function vertical(position, board) { 
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < board[position[0]].length; i++) { 
        if (board[i][position[1]] != '-') allNumbers.push(board[i][position[1]]);
    }
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) possibleNumbers.push(basis[j]);
    }
    return possibleNumbers;
}
//функция формирует все возможные числа в квадрате по заданным координатам position,
//определяю стартовую позицию для каждого квадрата(левый верхний угол)
 function square(position,board) {
    let possibleNumbers = [];
    let allNumbers = [];
    let basis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let sqrHor = Math.floor(position[0]/3);
    let sqrVert = Math.floor(position[1]/3);
    let startPoint = [sqrHor*3,sqrVert*3];
    for(let i = startPoint[0]; i < startPoint[0]+3; i++) {
        for(let j = startPoint[1]; j < startPoint[1]+3; j++) {
            allNumbers.push(board[i][j]);
        }
    }
    for (let j = 0; j < basis.length; j++) {
        if (!allNumbers.includes(basis[j])) {
            possibleNumbers.push(basis[j]);
        } 
    }
    return possibleNumbers;
 }
//функция формирует все возможные числа с учётом строки,столбца и квадрата 
//по заданным координатам position
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
////функция решает судоку.
function recursion(board) { 
    let isAnySpace = findPosition(board);
    if(isAnySpace===false) return board;
    let horizontalVars = horizontal(isAnySpace,board);
    let verticalVars = vertical(isAnySpace, board);
    let squareVars = square(isAnySpace, board); 
    let sumVars = allVariations(horizontalVars,verticalVars,squareVars);
    for(let i = 0; i < sumVars.length;i++) {
        if(sumVars.length===0) {
            return false;
        }
        board[isAnySpace[0]][isAnySpace[1]] = sumVars[i];
             if(recursion(board)) { 
                 return board;
             }
             else board[isAnySpace[0]][isAnySpace[1]] = '-';
    }
    return false;
}
//Для удобства вывода в консоль.
function outPut(){
    let board = generateBoard(str); ///Ybrati
    console.log(board);
    console.log("FInal recursion = \n",recursion(generateBoard(str)));
}
outPut();
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
    
