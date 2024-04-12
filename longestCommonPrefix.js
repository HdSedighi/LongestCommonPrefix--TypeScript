"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0)
        return "";
    var prefix = "";
    var minLength = Infinity;
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        minLength = Math.min(minLength, str.length);
    }
    for (var i = 0; i < minLength; i++) {
        var currentChar = strs[0][i];
        var allEqual = true;
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                allEqual = false;
                break;
            }
        }
        if (allEqual) {
            prefix += currentChar;
        }
        else {
            break;
        }
        // Introduce a redundant operation to increase runtime
        prefix.toUpperCase();
    }
    return prefix;
}
exports.default = longestCommonPrefix;
