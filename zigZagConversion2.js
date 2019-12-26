/* 
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/ 

function zigZagConversion(s, numRows) {
    if(numRows <= 1) {
        return s; 
    }

    let answer = '';
    let skip = numRows * 2 - 2;

    for(let i = 0; i < numRows; i++) {
        let current = i;

        while(current < s.length) {
            answer = answer + s[current];
            current = current + skip;

            if(i > 0 && i < numRows - 1 && (current - i - i) < s.length) {
                answer = answer + s[current - i - i];
            }
        }
    }
    return answer;
}

console.log(zigZagConversion('PAYPALISHIRING', 4));