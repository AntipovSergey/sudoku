// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let boardString0 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let boardString1 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
let boardString2 = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
let boardString3 = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
let boardString4 = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
let boardString5 = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
let boardString6 = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
let boardString7 = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
let boardString8 = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
let boardString9 = '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--';
let boardString10 = '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-';
let boardString11 = '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-';
let boardString12 = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';
let boardString13 = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
let boardString14 = '---------------------------------------------------------------------------------';

solve(boardString5);
function solve(boardString5) {
    boardString = boardString5;
    // ЗАМЕНЯЮ ТИРЕ НА НОЛЬ
    let boardStringWithout = boardString.replace(/\-/g,0)

    // РАЗДЕЛЯЮ СТРОКУ НА ЧИСЛА
    let stringArr = boardStringWithout.split('');

    // РАЗДЕЛЯЮ МАССИВ С ЧИСЛАМИ НА ПОДМАССИВЫ
    let boardArr = [];
    for (let i = 0; i < stringArr.length; i += 9) {
        boardArr.push(stringArr.slice(i, i + 9));
    }
    
    // ФУНКЦИЯ ПО ЗАМЕНЕ ПУСТЫХ ЗНАЧЕНИЙ НА ВОЗМОЖНЫЕ ВАРИАНТЫ
    function replaceSpaces(boardArr){
        let emptyArr = '123456789'
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++){
                // console.log(boardArr[i][j].includes('0'))
                if (boardArr[i][j].includes('0') === true) {
                    boardArr[i][j] = emptyArr;
                }
            }
        }
        return boardArr;
    }
    replaceSpaces(boardArr)

    // ФУНКЦИЯ ПО СРАВНЕНИЮ С ЗНАЧЕНИЯМИ ПО ГОРИЗОНТАЛЬНОЙ ЛИНИИ
    function comparisonFromGorizontal(boardArr, find, row){
            for (let col = 0; col < 9; col++){
                if (boardArr[row][col].length < 2){
                    if (find.includes(boardArr[row][col]) === true){
                        // console.log(boardArr[row1][col1]);
                        let reg = new RegExp(boardArr[row][col]) 
                        // console.log(reg)
                        find = find.replace(reg,'')
                    }
                }
            }
    return find;
    }             

    // ФУНКЦИЯ ПО УТОЧНЕНИЮ ВОЗМОЖНЫХ ВАРИАНТОВ С ГОРИЗОНТАЛЯМИ
    function clarificationFromGorizontal(boardArr){
        for (let row = 0; row < 9; row++){
            for (let col = 0; col < 9; col++){
                // console.log(boardArr[row][col].length) 
                if (boardArr[row][col].length > 1){
                    let find = boardArr[row][col];
                    boardArr[row][col] = comparisonFromGorizontal(boardArr, find, row);
                }
            }
        }                     
    return boardArr;
    }
    clarificationFromGorizontal(boardArr);

    // ФУНКЦИЯ ПО СРАВНЕНИЮ С ЗНАЧЕНИЯМИ ПО ВЕРТИКАЛЬНОЙ ЛИНИИ
    function comparisonFromVertikal(boardArr, find, col){
        for (let row = 0; row < 9; row++){
            if (boardArr[row][col].length < 2){
                if (find.includes(boardArr[row][col]) === true){
                    // console.log(boardArr[row1][col1]);
                    let reg = new RegExp(boardArr[row][col]) 
                    // console.log(reg)
                    find = find.replace(reg,'')
                }
            }
        }
    return find;
    }             

    // ФУНКЦИЯ ПО УТОЧНЕНИЮ ВОЗМОЖНЫХ ВАРИАНТОВ С ВЕРТИКАЛЯМИ
    function clarificationFromVertikal(boardArr){
        for (let row = 0; row < 9; row++){
            for (let col = 0; col < 9; col++){
                // console.log(boardArr[row][col].length) 
                if (boardArr[row][col].length > 1){
                    let find = boardArr[row][col];
                    boardArr[row][col] = comparisonFromVertikal(boardArr, find, col);
                }
            }
        }                     
    return boardArr;
    }
    clarificationFromVertikal(boardArr)

    // ФУНКЦИЯ ПО СРАВНЕНИЮ С ЗНАЧЕНИЯМИ В КВАДРАТЕ
    function comparisonFromKvadrat(boardArr, find, row, col){
        if (row >= 0 && row <= 2) {
            if (col >= 0 && col <= 2){
                for (let row1 = 0; row1 < 3; row1++){
                    for (let col1 = 0; col1 < 3; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 3 && col <= 5){
                for (let row1 = 0; row1 < 3; row1++){
                    for (let col1 = 3; col1 < 6; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 6 && col <= 8){
                for (let row1 = 0; row1 < 3; row1++){
                    for (let col1 = 6; col1 < 9; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
        } else
        if (row >= 3 && row <= 5) {
            if (col >= 0 && col <= 2){
                for (let row1 = 3; row1 < 6; row1++){
                    for (let col1 = 0; col1 < 3; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 3 && col <= 5){
                for (let row1 = 3; row1 < 6; row1++){
                    for (let col1 = 3; col1 < 6; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 6 && col <= 8){
                for (let row1 = 3; row1 < 6; row1++){
                    for (let col1 = 6; col1 < 9; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
        } else
        if (row >= 6 && row <= 8) {
            if (col >= 0 && col <= 2){
                for (let row1 = 6; row1 < 9; row1++){
                    for (let col1 = 0; col1 < 3; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 3 && col <= 5){
                for (let row1 = 6; row1 < 9; row1++){
                    for (let col1 = 3; col1 < 6; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
            if (col >= 6 && col <= 8){
                for (let row1 = 6; row1 < 9; row1++){
                    for (let col1 = 6; col1 < 9; col1++){
                        if (boardArr[row1][col1].length < 2){
                            if (find.includes(boardArr[row1][col1]) === true){
                                // console.log(boardArr[row1][col1]);
                                let reg = new RegExp(boardArr[row1][col1]) 
                                // console.log(reg)
                                find = find.replace(reg,'')
                            }
                        }
                    }
                }
            }
        }
        
    return find;
    }             

    // ФУНКЦИЯ ПО УТОЧНЕНИЮ ВОЗМОЖНЫХ ВАРИАНТОВ В КВАДРАТЕ
    function clarificationFromKvadrat(boardArr){
        for (let row = 0; row < 9; row++){
            for (let col = 0; col < 9; col++){
                // console.log(boardArr[row][col].length) 
                if (boardArr[row][col].length > 1){
                    let find = boardArr[row][col];
                    boardArr[row][col] = comparisonFromKvadrat(boardArr, find, row, col);
                }
            }
        }                     
    return boardArr;
    }
    clarificationFromKvadrat(boardArr)

    clarificationFromGorizontal(boardArr);
    clarificationFromVertikal(boardArr);
    clarificationFromKvadrat(boardArr);

    clarificationFromGorizontal(boardArr);
    clarificationFromVertikal(boardArr);
    clarificationFromKvadrat(boardArr);

    clarificationFromGorizontal(boardArr);
    clarificationFromVertikal(boardArr);
    clarificationFromKvadrat(boardArr);

    clarificationFromGorizontal(boardArr);
    clarificationFromVertikal(boardArr);
    clarificationFromKvadrat(boardArr);

    console.table(boardArr);
}





// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}


    // // ФУНКЦИЯ ПО ПОИСКУ ВСЕХ ПУСТЫХ ЗНАЧЕНИЙ В ВЕРТИКАЛЬНЫХ ЛИНИЯХ 
    // function searchVertikal(boardArr) {
    //     let emptyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     let boardArrString = [];
    //     let znachenia = [];
    //     for (let j = 0; j < 9; j++) {
    //         boardArrString = [];
    //         for (let i = 0; i < 9; i++) {
    //             boardArrString.push(boardArr[i][j])
    //             // console.log(boardArrString);
    //         }
    //         znachenia.push(emptyArr.filter(n => boardArrString.indexOf(n) === -1));
    //         // console.log(znachenia);
    //     }
    //     // console.log(znachenia)
    //     return znachenia;  
    // }




    // ЗАМЕНЯЮ СТРОКИ С ЧИСЛАМИ НА ЧИСЛА
    // for (let i = 0; i < 9; i++){
    //     for (let j = 0; j < 9; j++){
    //         boardArr[i][j] = (boardArr[i][j]) - 0; 
    //     }
    // }
    // console.table(boardArr);



    // // ФУНКЦИЯ ПО ПОИСКУ ВСЕХ ПУСТЫХ ЗНАЧЕНИЙ В ГОРИЗОНТАЛЬНЫХ ЛИНИЯХ
    // function searchGorizont(boardArr) {
    //     let emptyArr = '123456789';
    //     let boardArrString;
    //     let znachenia;
    //     for (let i = 0; i < 9; i++){
    //         boardArrString = boardArr[i];
    //         console.log(boardArrString);
    //         znachenia.push(emptyArr.filter(n => boardArrString.indexOf(n) === -1));
    //     }
    //     console.log(znachenia);
    //     return znachenia;  
    // }
    // searchGorizont(boardArr)
