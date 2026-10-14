const rotateArray = (k, array) => {
    if (k >= array.length) {
        k = k % array.length;
    }

    const rotate = (i, j) => {
        while (i < j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++;
            j--;
        }
    }

    rotate(0, array.length - 1)
    rotate(0, k - 1)
    rotate(k, array.length - 1)

    return array
}

console.log(rotateArray(3, [1, 2, 3, 4, 5]))