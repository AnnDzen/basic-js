const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  const baseStr = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : '+';
    const hasAddition = options.addition !== undefined;
  const addition = hasAddition ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let additionPiece = '';
  if (hasAddition) {
    const additionArr = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition);
    }
    additionPiece = additionArr.join(additionSeparator);
  }

  const fullPiece = baseStr + additionPiece;
  const resultArr = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(fullPiece);
  }

  return resultArr.join(separator);
}
module.exports = {
  repeater
};
