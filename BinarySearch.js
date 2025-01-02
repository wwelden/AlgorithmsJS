var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


function BinarySearch(arr, target){
    let min = 0, max = arr.length-1;
    let mid;

    while (min <= max) {
        mid = Math.floor((min + max) /2);

        if (arr[mid] === target){
            return mid;
        }else if (arr[mid] < target){
            min = mid +1;
        } else {
            max = mid -1;
        }
    }
    return -1;
}

function RecursiveBinarSearch(arr, target, min = 0, max = arr.length - 1) {
    if (min > max) {
        return -1;
    }

    let mid = Math.floor((min + max) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return RecursiveBinarSearch(arr, target, mid + 1, max);
    } else {
        return RecursiveBinarSearch(arr, target, min, mid - 1);
    }
}

console.log(BinarySearch(primes, 67));
console.log(RecursiveBinarSearch(primes, 67));