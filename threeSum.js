/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {
    // sort the nums array 
    nums.sort((a, b) => a - b); 
    
    // list of variables 
    const result = []; 
        
    // if nums.length > 3
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break; 
        if(i > 0 && nums[i] === nums[i-1]) continue;
        
        let left = i + 1; 
        let right = nums.length - 1;
        
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if(sum < 0) left = left + 1; 
            else if(sum > 0) right = right - 1; 
            else {
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left = left + 1;
                while(left < right && nums[right] === nums[right - 1]) right = right - 1;
                left = left + 1; 
                right = right - 1; 
                }
            }
        }
        return result; 
    };
