
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function getArrFromStr(str) {
    const arr = str.match(/.{9}/gm).map(line => line.split(''));
    // console.log(arr);
    return(arr)
}

function run (matrix, validator){ 
    //*TODO: принимает судоку и массив чисел
    //*TODO: находит свободную ячейку 
    //*TODO: если передан массив из одного числа, записывает его в свободную
//** прохожусь по массиву судоку первой вложенности и второй */
matrix.forEach((element, index) => { 
        element.forEach((element2,index2)=>{
            if ( element2 === '-'){
                if ( validator.length === 1){
                    matrix[index][index2] = validator
                    console.log('Заменили число', matrix)
                } else {
                    console.log('нет свободного числа :(')
                }
            }
                
        })
 });

    //END
}

run(getArrFromStr(str), [7])

point = str[3][1]
console.log(point)
value = [1, 4, 6, 9]
function row (matrix, value) {
//*TODO: принимает судоку и массив, текущую точку чисел 1-9
//*TODO: должна проверить и удалить из массива числа, которые есть в строке
//*TODO: вернуть новый массив из чисел, которые могут быть в клеточке
//*TODO: Идея в том, чтобы оставить при проверках в массиве одну цифру, которая запишется в функции Ран


   let arr = [...matrix[0]];
    let newArr = [];

    console.log ('im here!',arr)
    value.forEach((el,index)=>{

        if ( arr.find((arrEl) => {
            arrEl === el})){
            
            value.splice(index,1)
        } else {
            newArr.push(el)
        }
    })
   
return newArr
}

