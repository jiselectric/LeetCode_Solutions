class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxSub = nums[0]
        minSub = nums[0]
        result = nums[0]
        
        for i in range(1, len(nums)):
            curr = nums[i]
            
            tempMax = max(curr, maxSub * curr, minSub * curr)
            minSub = min(curr, maxSub * curr, minSub * curr)
            
            maxSub = tempMax
            
            result = max(maxSub, result)
        
        return result