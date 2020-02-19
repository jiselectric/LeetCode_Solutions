var isHappy = function(n) {
    let result = 0
    let history = []
    while (result !== 1){

        if(history.includes(n)) return false;
        history.push(n)

         while( n !== 0){
             result += Math.pow((n%10),2)
            n = Math.floor(n/10);
        }

        if (result === 1) return true
        n = result
        result = 0
    }
    return true   
};


