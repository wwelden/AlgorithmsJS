var unsorted = [14, 7, 3, 12, 9, 11, 6, 2, 1, 15, 8, 13, 4, 5, 10];

function InsertionSort(arr){
    let n = arr.length;
    let key, j;

    for (let i = 1; i < n; i++){
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(InsertionSort(unsorted));

