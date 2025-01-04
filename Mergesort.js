var unsorted = [14, 7, 3, 12, 9, 11, 6, 2, 1, 15, 8, 13, 4, 5, 10];


function MergeSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr;
    }

    const mid = Math.floor((start + end) / 2);
    MergeSort(arr, start, mid);
    MergeSort(arr, mid + 1, end);
    Merge(arr, start, mid, end);

    return arr;
}

function Merge(arr, start, mid, end) {
    const leftArr = arr.slice(start, mid + 1);
    const rightArr = arr.slice(mid + 1, end + 1);

    let i = 0;
    let j = 0;
    let k = start;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }

    return arr;
}

console.log(MergeSort(unsorted));