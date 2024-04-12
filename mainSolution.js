"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var longestCommonPrefix_1 = require("./longestCommonPrefix");
function solution() {
    var strings = ["flower", "flow", "flight"];
    var result = (0, longestCommonPrefix_1.default)(strings);
    console.log(result);
}
solution();
