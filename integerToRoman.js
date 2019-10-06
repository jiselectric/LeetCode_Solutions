/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 
                 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';
    
    numbers.forEach(function(value, index) {
        if(num > 0) {
            if(Math.floor(num / value) > 0) {
                let times = Math.floor(num / value); 
                num = num - (times * value);
                
                while(times > 0) {
                    result = result + roman[index]; 
                    times--; 
                }
            }
        }
    });
    return result; 
};