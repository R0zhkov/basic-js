const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let splitted = str.split("")
  let result = []
  let count = 1;
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] == splitted[i + 1]) {
      count++
    } else {
      result.push(count)
      count = 1;
        result.push(splitted[i])
    }
  }
return result.join("").replaceAll('1', '')
}
module.exports = {
  encodeLine
};
