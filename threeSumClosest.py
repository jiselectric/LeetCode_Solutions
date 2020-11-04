def threeSum(nums, target):
    nums = sorted(nums)

    result = nums[0] + nums[1] + nums[len(nums) - 1]

    for i in range(len(nums) - 2):
        left = i + 1
        right = len(nums) - 1

        while left < right:
            current = nums[left] + nums[right] + nums[i]

            if current == target:
                return target
            
            elif abs(target - current) < abs(target - result):
                result = current
            
            elif current > target:
                right = right - 1
            
            elif current < target:
                left = left + 1

    
    return result

        
nums = [-1, 2, 1, -4, 0]
target = 1
print(threeSum(nums, target))