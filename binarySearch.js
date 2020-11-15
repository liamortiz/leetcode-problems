function bSearch(arr, target) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    console.log(`Middle: ${arr[middle]} Array: ${arr}`);

    if (arr[middle] === target) return middle;
    if (arr[middle] > target) {
        arr.splice(middle, arr.length);
    } else {
        arr.splice(0, middle)
    }

    bSearch(arr, target);
}

bSearch([1, 3, 5, 7, 9, 10, 13, 16, 20, 23], 7)