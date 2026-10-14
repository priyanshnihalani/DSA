const unionArray = (array1, array2) => {
    let array = []
    let i = 0;
    let j = 0;

    const addToUnion = (val) => {
        if (array.length == 0 || array[array.length - 1] !== val) {
            array.push(val)
        }
    }

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            addToUnion(array1[i])
            i++
        }
        else if (array1[i] > array2[j]) {
            addToUnion(array2[j]);
            j++
        }
        else {
            addToUnion(array1[i])
            i++
            j++
        }
    }

    while (i < array1.length) {
        addToUnion(array1[i])
        i++
    }

    while (j < array2.length) {
        addToUnion(array2[j]);
        j++
    }

    return array
}

console.log(unionArray([1, 10, 25], [2, 9]));
