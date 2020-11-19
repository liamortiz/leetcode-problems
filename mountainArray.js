/*
Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Samples:

Input: arr = [2,1]
Output: false

Input: arr = [3,5,5]
Output: false

Input: arr = [0,3,2,1]
Output: true
*/


function validMountain(arr) {
    if (arr.length < 3) return false;

    let peek = false;
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const nextNumber = arr[i + 1];
        
        if (currentNumber >= nextNumber && !peek && i !== 0) {
            peek = true;
        }

        if (peek && currentNumber <= nextNumber) return false;
        if (!peek && currentNumber >= nextNumber) return false;
    }
    return peek && true;
}


console.log(validMountain([0,3,2,1]));