const lastOccurance = (array, target, i, result) => {

    if (i == array.length) return result;

    if (array[i] == target) {
        result = i;
    }

    return lastOccurance(array, target, ++i, result)
}

console.log(lastOccurance([1, 1, 2, 3, 2], 2, 0, -1))