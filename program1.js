/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastBracket = stack.pop();

      if (
        (char === ")" && lastBracket !== "(") ||
        (char === "]" && lastBracket !== "[") ||
        (char === "}" && lastBracket !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
const balancedParan = "(a + b) * (c - d)";
const unbalancedParan = "((a + b) * (c - d)";

console.log(isValid(balancedParan));
console.log(isValid(unbalancedParan));

module.exports = { isValid };
