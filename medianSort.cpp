class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> merge = nums1;
        merge.insert(merge.end(), nums2.begin(), nums2.end());
        
        int mergeSize = merge.size();
        int half = mergeSize/2;
        
        double result;
        
        std::sort(merge.begin(), merge.end());
        
        if (mergeSize % 2 == 0)
            result = (merge[half] + merge[half - 1]) / 2.0;
        else
            result = (double)merge[half];
        
        return result;
    }
};

