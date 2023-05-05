const stringToArray = require('./stringToArray.js');

const getPossibleValuesVert = (coord, arr) => {
	const rowInd = Number(coord.split(',')[1]);
	const newArr = arr.map(el => el[rowInd]).filter(el => el !== 0);
	const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const filteredArr = num.filter(el => !newArr.includes(el));
	return filteredArr;
};

module.exports = getPossibleValuesVert;
