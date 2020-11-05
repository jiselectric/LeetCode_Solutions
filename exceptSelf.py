class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        le = len(nums)
        
        answer = [1] * le
        
        for i in range(1, le):
            answer[i] = answer[i-1] * nums[i-1]
            
        right = 1
        
        for i in range(le - 1, -1, -1):
            answer[i] = right * answer[i]
            right = right * nums[i]
        
        return answer