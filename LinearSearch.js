var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


function LinearSearch(arr, target, start = 0) {
    if (arr[start] === target){
        return start;
    }else if(start == arr.length) {
        return -1;
    }else{
        return LinearSearch(arr, target, start+1);
    }
}

console.log(LinearSearch(primes, 67));