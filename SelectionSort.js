var unsorted = [14, 7, 3, 12, 9, 11, 6, 2, 1, 15, 8, 13, 4, 5, 10];

function SelectionSort(arr){
    n = arr.length
    for (let j = 0; j < n-1; j++){
        var min = j;
        for (let i = j +1; i < n; i ++){
            if (arr[i] < arr[min]){
                min = i;
            }
        }
        var temp = arr[j];
        arr[j] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(SelectionSort(unsorted))