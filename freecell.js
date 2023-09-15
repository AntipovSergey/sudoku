function freeCellsArr(arr) {
    let n = 0;
    let cells = [];
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[i][j] === 0) {
            cells.push([x,y]);
        }
    }
}
return cells;
}