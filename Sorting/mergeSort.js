const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift())
        }
        else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

console.log(mergeSort([5, 2, 4, 1, 3]));