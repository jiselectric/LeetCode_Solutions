var isPalindrome = function(x) {

    let revNumber = 0;
    const number = x;

    while (x > 0) {
        revNumber = (revNumber * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return revNumber === number;
};
