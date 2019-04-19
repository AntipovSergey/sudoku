let arr = [[1,2,3,4],[5,3,4,5],[3,4,5,6],[4,5,6,7]];

let b;
let a = [];
let d
for(let i = 0; i < 4; i++){
    let c = [];
  for(let j = 0; j < 4; j++){
    c.push(arr[j][i]);
  }
  a.push(c)
}
console.log(a);