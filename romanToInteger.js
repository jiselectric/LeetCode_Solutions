/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

   let romanObj = {
       'I' : 1,
       'V' : 5,
       'X' : 10,
       'L' : 50,
       'C' : 100,
       'D' : 500,
       'M' : 1000
   }

   let number = 0;

    for(let i = 0; i < s.length; i++) {
        if(romanObj[s[i+1]] > romanObj[s[i]]) {
            number = number + romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        } else {
            number = number + romanObj[s[i]];
        }
    }

    return number;
};
