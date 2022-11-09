// Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

let arr = [10, 20, 14, 16, 18]
let arrTwo = [30, 23, 54, 33, 96]
let m = arr.length
let n = arrTwo.length
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

const smallestNum = (arr, arrTwo, m, n) => {
    // find smallest difference bewteen arr and arrTwo
    arr.sort((a, b) => a - b)
    arrTwo.sort((a, b) => a - b)

    let a = 0
    let b = 0

    let result = Number.MAX_SAFE_INTEGER

    while (a < m && b < n) {
        if (Math.abs(arr[a] - arrTwo[b]) < result)
            result = Math.abs(arr[a] - arrTwo[b]);
 
        if (arr[a] < arrTwo[b])
            a++;
        else
            b++;
    }
    return result;
}

console.log(smallestNum(arr, arrTwo, m, n))