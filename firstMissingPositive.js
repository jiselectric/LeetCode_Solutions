/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map = {};
    nums.forEach(el => map[el] = el) 
    
    for(let i = 1; true; i++) {
        if(!map[i]) {
            return i; 
        }
    }
};