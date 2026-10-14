let array = [1, 2, 3, 4, 5]
// 5, 4, 3, `2, 1`
let k = 2

const leftRotateArray = (k, array) => {
    if (k >= array.length) {
        k = k % array.length
    }

    const rotate = (i, j) => {
        while (i < j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++;
            j--;
        }
    }
    rotate(0, array.length - 1)
    rotate(array.length - k, array.length - 1)
    rotate(0, array.length - k - 1)

    return array;

}

console.log(leftRotateArray(k, array))