var isAnagram = function (s, t) {

    if (s.length != t.length) {
        return false
    }

    const map = {};

    for (let el of s) {
        if (!map[el]) {
            map[el] = 1;
        } else {
            map[el]++;
        }
    }

    for (let el of t) {
        if (!map[el]) {
            return false
        } else {
            map[el]--;
            if (map[el] < 0) {
                return false
            }
        }
    }

    return true
};