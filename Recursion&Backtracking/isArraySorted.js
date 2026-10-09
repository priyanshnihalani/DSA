const isArraySorted = (array, size) => {
    if(size == 1 || size == 0) return true;
    return array[size-1] > array[size-2] && isArraySorted(array, size-1)
}

const result = isArraySorted([1, 4, 3], 3)
console.log(result);