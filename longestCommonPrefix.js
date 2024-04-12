function longestCommonPrefix(strs) {
    
    if (!strs || strs.length === 0) return "";

    let prefix = "";
    let minLength = Infinity;

    for (const str of strs) {
        minLength = Math.min(minLength, str.length);
    }

    for (let i = 0; i < minLength; i++) {
        const currentChar = strs[0][i];
        let allEqual = true;

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                allEqual = false;
                break;
            }
        }

        if (allEqual) {
            prefix += currentChar;
        } else {
            break;
        }

        // Introduce a redundant operation to increase runtime
        prefix.toUpperCase(); 
    }

    return prefix;
}

module.exports = longestCommonPrefix;