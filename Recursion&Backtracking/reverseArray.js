const reverseArray = (array, left, right) => {
    if (left >= right) {
        return array;
    }
    array[left] = array[left] + array[right];
    array[right] = array[left] - array[right];
    array[left] = array[left] - array[right];
    return reverseArray(array, ++left, --right)
}

const result = reverseArray([1, 2, 3, 4], 0, 3)
console.log(result);
