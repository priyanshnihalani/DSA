const partition = (array, left, right) => {
    const middle = Math.floor((left + right) / 2)

    while (left <= right) {
        while (array[left] < array[middle]) {
            left++;
        }
        while (array[right] > array[middle]) {
            right--
        }

        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++;
            right--;
        }
    }

    return left;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
    if(left < right){
        let index = partition(array, left, right)

        quickSort(array, left, index-1)
        quickSort(array, index, right);
    }
    return array
}

console.log(quickSort([5, 2, 4, 1, 3]))