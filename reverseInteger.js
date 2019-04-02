/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let falseTrue = true;

    if(x < 0) {
        falseTrue = false;
        x = x * -1;
    }

    let result = 0;
    while(x !== 0) {
        result = (result * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if(result > Math.pow(2, 31)) {
        return false;
    }

    return falseTrue === true ? result : result * -1;
};
