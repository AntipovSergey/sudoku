function fillCells(arr) {

    const mainObj = {}
    const digits = [1,2,3,4,5,6,7,8,9]
    const tempArr1 = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        tempArr1.push(arr[i][j]);
    }
}
mainObj[1] = digits.filter((el) => {if(!tempArr1.includes(el)) return el});

    const tempArr2 = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
            tempArr2.push(arr[i][j])
        }
    }
mainObj[2] = digits.filter((el) => {if(!tempArr2.includes(el)) return el});

    const tempArr3 = [];        
for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
            tempArr3.push(arr[i][j]);
        } 
}
mainObj[3] = digits.filter((el) => {if(!tempArr3.includes(el)) return el});
/////////////////////////////////////////////////////////
const tempArr4 = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    tempArr4.push(arr[i][j]);
}
}
mainObj[4] = digits.filter((el) => {if(!tempArr4.includes(el)) return el});

const tempArr5 = [];
for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
        tempArr5.push(arr[i][j])
    }
}
mainObj[5] = digits.filter((el) => {if(!tempArr5.includes(el)) return el});

const tempArr6 = [];        
for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
        tempArr6.push(arr[i][j]);
    } 
}
mainObj[6] = digits.filter((el) => {if(!tempArr6.includes(el)) return el});
////////////////////////////////////////////////////////////////
const tempArr7 = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    tempArr7.push(arr[i][j]);
}
}
mainObj[7] = digits.filter((el) => {if(!tempArr7.includes(el)) return el});

const tempArr8 = [];
for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
        tempArr8.push(arr[i][j])
    }
}
mainObj[8] = digits.filter((el) => {if(!tempArr8.includes(el)) return el});

const tempArr9 = [];        
for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
        tempArr9.push(arr[i][j]);
    } 
}
mainObj[9] = digits.filter((el) => {if(!tempArr9.includes(el)) return el});

return(mainObj)
}

