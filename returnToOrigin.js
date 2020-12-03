var judgeCircle = function(moves) {
    
    let x = 0;
    let y = 0;
    
    const pairs = {'R': 1,'L': -1,'D': -1,'U': 1}
    
    for (const move of moves) {
        if (move === 'U' || move === 'D') {
            x += pairs[move]
        } else {
            y += pairs[move];
        }
    }
    return (x === 0 && y === 0);
    
};