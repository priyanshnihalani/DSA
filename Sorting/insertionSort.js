const insertionSort = (arr) => {
    let n = arr.length
    for (let i = 1; i < n; i++) {

        const element = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > element) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = element

    }

    return arr
}

const result = insertionSort([5, 2, 4, 6, 1, 3])
console.log(result);
