class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        stack = []
        ans = 0
        for i in range(len(height)):
            while stack and height[stack[-1]]<height[i]:
                left_end = stack[-1]
                stack = stack[:-1]
                if stack == []:
                    break
                width = i - stack[-1] - 1
                vert = min(height[i], height[stack[-1]]) - height[left_end]
                ans += width*vert
                
            stack += [i]
        return ans