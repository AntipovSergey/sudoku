// Проверка по квадрату

function squareCheck(square, coordinates) {
    let result = [];
    const spc =  coordinates.map(el => Math.floor(el/3)*3);
    
    for ( let x = spc[0]; x <=spc[0]+3; x += 1) {
        for ( let y = spc[1]; y <= spc[1]+3; y += 1) {
            if(square[x][y] != '-') result.push(square[x][y]);
        }
    }
    return result;
}