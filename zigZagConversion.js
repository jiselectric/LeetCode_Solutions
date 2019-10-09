const convert = (s, numRows) => {
    if(numRows === 1) return s;
    let solution = new Array(numRows).fill("");
    let index = 0;
    let turnFlag = 1;
    
    for(let i = 0; i < s.length; i++){
        solution[index] += s[i];
        index += turnFlag;
        if(!index || index === numRows-1) turnFlag *=-1;
    }
    return solution.join('');
};
