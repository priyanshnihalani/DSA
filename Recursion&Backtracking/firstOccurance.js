const firstOccurance = (array, target, i) => {

    if(i == array.length) return -1
    if(array[i] == target) return i

    return firstOccurance(array, target, ++i)
}

console.log(firstOccurance([1, 1, 2], 1, 0))