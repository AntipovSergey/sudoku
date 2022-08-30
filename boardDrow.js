const cfonts = require('cfonts');

function createString(arr, forma) {
  const el = arr;
  const b = forma.border;
  const v = forma.vertical;
  const s = forma.space;
  const line = `${b}${s}${el[0]}${s}${v}${s}${el[1]}${s}${v}${s}${el[2]}${s}${b}${s}${el[3]}${s}${v}${s}${el[4]}${s}${v}${s}${el[5]}${s}${b}${s}${el[6]}${s}${v}${s}${el[7]}${s}${v}${s}${el[8]}${s}${b}`;
  return line;
}
function stringSolid(forma) {
  const lineLength = forma.lineLength();
  let line = '';
  line = line.padStart(lineLength, forma.border);
  return line;
}

function stringLayer(forma) {
  const b = forma.border;
  let block = '';
  block = block.padStart((forma.space.length * 6 + 5), ' ');
  const line = `${b}${block}${b}${block}${b}${block}${b}`;
  return line;
}

const fontSetting = {
  colors: ['blue'],
  space: false,
  font: 'console',
  gradient: ['blue', 'red'],
};

function boardDrawCfonts(array, formaC) {
  const m = formaC.margin;
  cfonts.say(m + stringSolid(formaC), fontSetting);
  cfonts.say(m + stringLayer(formaC), fontSetting);
  array.forEach((el, ind) => {
    if (ind === 3 || ind === 6) {
      cfonts.say(m + stringSolid(formaC), fontSetting);
      cfonts.say(m + stringLayer(formaC), fontSetting);
    }
    cfonts.say(m + createString(el, formaC), fontSetting);
    cfonts.say(m + stringLayer(formaC), fontSetting);
  });
  cfonts.say(m + stringSolid(formaC), fontSetting);
  console.log('\n');
  cfonts.say('sudoku is solved\n', { space: false, font: 'chrome', gradient: ['red', 'blue'] });
}

module.exports = boardDrawCfonts;
