function bSearch(arr, target) {    
    if (arr.length <= 1) return arr;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        console.log(arr[left], arr[middle], arr[right]);

        if (arr[middle] === target) {
            console.log("Index: ", middle);
            return middle;
        }
        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
}

bSearch([1, 3, 5, 7, 9, 10, 13, 16, 20, 23], 7)