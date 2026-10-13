const removingDuplicates = (array) => {
    array.sort((a, b) => a - b)
    let left = 0;
    for (let right = 1; right < array.length; right++) {
        if(array[left] !== array[right]){
            left++;
            array[left] = array[right]
        }
    }
    return array.slice(0, left + 1)
}

console.log(removingDuplicates([5, 2, 2, 3, 4, 5, 1]));
