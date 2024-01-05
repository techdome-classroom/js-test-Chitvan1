/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = romanNum[s[i]];
    const nextSymbol = romanNum[s[i + 1]];

    if (nextSymbol && currentSymbol < nextSymbol) {
      result -= currentSymbol;
    } else {
      result += currentSymbol;
    }
  }
  return res;
  console.log(res);
};

module.exports = { romanToInt };
