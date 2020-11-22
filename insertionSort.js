function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const number = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > number) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = number;
    }
    return arr;
}


console.log(sort([3, 1, 6, 2, 10]));