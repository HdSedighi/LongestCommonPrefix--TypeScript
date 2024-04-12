
const longestCommonPrefix = require('./longestCommonPrefix.js');

function solution() {
    let strings = ["flower", "flow", "flight"];
    let result = longestCommonPrefix(strings);
    console.log(result);
}
solution();