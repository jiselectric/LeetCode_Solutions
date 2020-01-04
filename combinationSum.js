function combinationSum(candidates, target) {
    let sortArr = candidates.sort((a, b) => a - b);
    let result = [];

    helper(sortArr, 0, target, [], result);
    return result;
}

    function helper(sortArr, index, target, subset, result) {
        if(target === 0) {
            result.push(subset.slice());
        }

        if(target <= 0 || sortArr[index] > target) {
            return;
        }

        for(let i = index; i < sortArr.length; i++) {
            subset.push(sortArr[i]);
            helper(sortArr, i, target - sortArr[i], subset, result);
            subset.pop();
    }
}


