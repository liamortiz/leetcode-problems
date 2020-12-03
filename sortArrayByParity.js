var sortArrayByParity = function(A) {
    
    const arr = [[], []];    
    for (const num of A) {
        if (num % 2 === 0) {
            arr[0].push(num);
        } else {
            arr[1].push(num);
        }
    }
    return arr.flat();
};