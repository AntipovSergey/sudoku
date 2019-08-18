// let  x = [0,2,3];
// if(!x)return console.log("Empty");
// let count = 0;
// function F(x) {
   
// console.log("Мы находимся на глубине = ", count);
// console.log("X = ", x);
// if(x[1]===1) {
//     x[1] = 44;
//     console.log("X = ", x);
//     return false;
// }
//     x[1]--;
//     count++;
// return F(x);

// }

// console.log("F = ", F(x),"xxxxx== ",x);
let str ='';
for(let i = 0; i < board.length; i++) {
    for(let j = 0 ; j< board.length; j++) {
        str+=board[i][j];
    }
}
console.log(str);