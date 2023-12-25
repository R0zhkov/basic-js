const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
      n = n.toString();
  for(let i=0;i<n.length;i++){
    result.push(Number(n.replace(n[i],'')))
  }
  return Math.max(...result)
}
module.exports = {
  deleteDigit
};
