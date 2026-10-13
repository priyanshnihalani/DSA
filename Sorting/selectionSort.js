const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        if (minIndex != i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }

    return arr;
}

const result = selectionSort([5, 2, 4, 6, 1, 3])
console.log(result);
