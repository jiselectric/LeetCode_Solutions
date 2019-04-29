/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let result = true;
    let basket = [];
    let bracket = {
        '(' : ')' ,
        '{' : '}' ,
        '[' : ']'
    };

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            basket.push(s[i]);
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            let popping = basket.pop();
            if(s[i] !== bracket[popping]) {
                return false;
            }
        }
    }

    if(basket.length !== 0) {
        return false;
    }

    return true;

};
