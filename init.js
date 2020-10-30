const stringToArr = require('./stringToArr');
const makeObjFromArr = require('./makeObjFromArr');
const splitIntoKnownValuesAndUnknowns = require('./splitter');
const deleteExistKey = require('./deleteExistKey');
const transposeArray = require('./transpArray');
const writeTheFoundValues = require("./writeTheFoundValues")

const game = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let arrWithSolution = stringToArr(game);
let objectContainingValues = makeObjFromArr(arrWithSolution);
console.log(arrWithSolution);

for (let index = 0; index < arrWithSolution.length; index += 1) {
  const knownUnknown = splitIntoKnownValuesAndUnknowns(arrWithSolution[index], index);
  const unknown = knownUnknown.unknown;
  const known = knownUnknown.known;
  for (let b = 0; b < unknown.length; b++) {
    objectContainingValues = deleteExistKey(objectContainingValues, unknown[b], known);
  };
}
// console.log(arrWithSolution);
arrWithSolution = writeTheFoundValues(objectContainingValues, arrWithSolution);
const invertedArray = transposeArray(arrWithSolution, 9);

for (let index = 0; index < arrWithSolution.length; index += 1) {
    const knownUnknown = splitIntoKnownValuesAndUnknowns(invertedArray[index], index);
    const unknown = knownUnknown.unknown;
    const known = knownUnknown.known;
    for (let b = 0; b < unknown.length; b++) {
      objectContainingValues = deleteExistKey(objectContainingValues, unknown[b], known);
    };
  }
arrWithSolution = writeTheFoundValues(objectContainingValues, arrWithSolution);
console.log(">>>>>>>", arrWithSolution);