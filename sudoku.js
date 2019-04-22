

var sudok = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
var raz = '--------------------------------------------------------'
// gives random int from 1 to 9
let indexRandom = 0
let numberRandom = 0
let indexDoneRandom = 3
let checkingRow = '200'
let checkingColumn = '11231'


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max) + 1);
}



function putRandom(str) {
	// indexRandom = str.indexOf('-')
	// numberRandom = getRandomInt(9)

	// Замена цифры по индексу
	// let done = str.substring(0, indexRandom) + numberRandom + str.substring(indexRandom + 1)

	// Создаем строку, по которой ищем дубли с рандомной цифрой
	// console.log(done)
	// checkingRow = sudok.slice(Math.floor(indexDoneRandom / 9) * 9, (Math.floor(indexDoneRandom / 9) * 9 + 9))
	// // Создаем столбец, по которой ищем дубли с рандомной цифрой
	// for (let i = 0; i < 9; i++) {
	// 	checkingColumn = checkingColumn.concat(done.slice(indexDoneRandom - 9 * i, (indexDoneRandom - 9 * i)+1))
	// }
	// // Пока находит дубли в строке или в столбце, подставляет новое рандомное число
	let counter = 0
	let done = str
	console.log((checkingRow.split(numberRandom)).length > 1)
	console.log((checkingColumn.split(numberRandom)).length > 1)
	console.log(indexDoneRandom)
	numberRandom = '1'
	while ((((checkingRow.split(numberRandom)).length -1> 1) || ((checkingColumn.split(numberRandom)).length-1 > 1)) && ((indexDoneRandom >=0))) {
		console.log('privet')

		numberRandom = getRandomInt(9)
		console.log('Random tsifra: '+numberRandom)
		indexDoneRandom = done.indexOf('-')
		console.log(indexDoneRandom + 'indR')
		console.log(done+' do dobavleniya done')
		// подставляется рандомное число по индексу indexDoneRandom
		done = done.substring(0, indexDoneRandom) + numberRandom + done.substring(indexDoneRandom + 1)	
		console.log(done+' posle dobavleniya done')
		checkingRow = done.slice(Math.floor(indexDoneRandom / 9) * 9, (Math.floor(indexDoneRandom / 9) * 9 + 9))
		console.log(checkingRow+ ' checking row')
		checkingColumn = ''
		for (let i = 0; i < 9; i++) {
			checkingColumn = checkingColumn.concat(done.slice(indexDoneRandom - 9 * i, (indexDoneRandom - 9 * i)+1));
		}
		indexDoneRandom = done.indexOf('-')
		console.log(checkingColumn+ ' checking column posle for')
		// numberRandom = getRandomInt(9)
		// console.log(numberRandom'')
		// done = done.substring(0, indexDoneRandom) + numberRandom + done.substring(indexDoneRandom + 1)
		counter++;
		console.log(done+ 'done posle dobavleniya');
		console.log(done.search('-')+' doneserach')
		console.log(checkingRow)
		console.log(checkingRow.split(numberRandom))
		console.log(checkingRow.split(numberRandom).length - 1+ ' random')
		if((done.search('-') >= 0) && ((checkingRow.split(numberRandom).length - 1) < 1) || ((checkingColumn.split(numberRandom).length - 1) < 1)){
			
			indexDoneRandom = done.indexOf('-')}
			console.log(indexDoneRandom+ ' indR posle dobavleniya')

		console.log(((checkingRow.split(numberRandom)).length > 1))
		console.log(((checkingColumn.split(numberRandom)).length > 1))
		console.log(indexDoneRandom)

		// if (counter = 900000)
		// return
	}
	console.log(done.slice(0, 9))
	console.log(done.slice(9, 18))
	console.log(done.slice(18, 27))
	console.log(done.slice(27, 36))
	console.log(done.slice(36, 45))
	console.log(done.slice(45, 54))
	console.log(done.slice(54, 63))
	console.log(done.slice(63, 72))
	console.log(done.slice(72, 81))
}

putRandom(sudok)
