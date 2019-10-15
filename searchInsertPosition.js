/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.includes(target)) {
        return nums.indexOf(target);
    }
    
    for(let j = 0; j < nums.length; j++) {
       if(target > nums[j] && target < nums[j+1]) {
           nums.splice(j+1,0,target); 
       } else if(target > nums[nums.length-1]) {
           nums.push(target); 
       } else if(target < nums[0]) {
           return 0; 
       }
    }
    
        
        return nums.indexOf(target);
};