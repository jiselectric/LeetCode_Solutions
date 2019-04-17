/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return '';
    }

    let result =  strs[0];

    for(let i = 0; i < result.length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== result[i]) {
                return result.substring(0, i);
            }
        }
    }


    return result;




};
