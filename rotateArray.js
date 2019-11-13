var rotate = function(nums, k) {
    let slice = k % nums.length;
    let cut = nums.splice((nums.length - slice));
    cut.unshift.apply(nums, cut);
};