let str1 =[1,5,3,];
let str2 = [4,5,6];
let str3= [7,9,6]

// function valid (str, col, squ){
//    const concat = str.concat(col).concat(squ) 
//    const arrStr = concat.join(",")
//    const valid = "1,2,3,4,5,6,7,8,9"
//    const rep = valid.replace(`${arrStr},`, " ")
//    console.log(rep)
// }
// valid(str1,str2,str3)

function valid (str, col, squ){
   const concat = str.concat(col).concat(squ) 
   const set = new Set(concat)
   const UniqArr = [...set]
   const valid = [1,2,3,4,5,6,7,8,9]
   const concat2 = valid.concat(UniqArr)
   const set2 = new Set(concat2)
   const uniq = [...set2]
   console.log(concat2)
   // const arrStr = concat.join(",")
   
   // const rep = valid.replace(`${arrStr},`, " ")
   // console.log(rep)
}
valid(str1,str2,str3)