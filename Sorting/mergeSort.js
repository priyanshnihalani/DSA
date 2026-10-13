const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle);
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (leftArray, rightArray) => {
    let sortedResult = []
    while (leftArray.length > 0 && rightArray.length > 0) {

        if (leftArray[0] < rightArray[0]) {
            sortedResult.push(leftArray.shift())
        }
        else {
            sortedResult.push(leftArray.shift())
        }
    }

    return [...sortedResult, ...leftArray, ...rightArray]
}