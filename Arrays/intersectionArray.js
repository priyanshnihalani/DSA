const intersectionArray = (array1, array2) => {
    let array = []
    let i = 0;
    let j = 0;

    const addToIntersection = (val) => {
        if (array.length == 0 || array[array.length - 1] !== val) {
            array.push(val)
        }
    }

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            i++
        }
        else if (array1[i] == array2[j]) {
            addToIntersection(array1[i])
            i++;
            j++
        }
        else {
            j++
        }
    }
    return array
}

console.log(intersectionArray([1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));