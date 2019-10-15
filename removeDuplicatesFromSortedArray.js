/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if(nums.length < 2) {
        return nums; 
    }
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i--, 1); 
        }
    }
    
    
    
    /* 
    let set = new Set(nums); 
	let setArr = Array.from(set);
	
	return setArr;
    */ 
};