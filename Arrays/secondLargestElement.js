const secondLargestElement = (array) => {
    let largestElement = array[0]
    let secondLargestElement = Number.NEGATIVE_INFINITY

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestElement) {
            secondLargest = largestElement
            largestElement = array[i]
        }
        else {
            if (array[i] > secondLargestElement && array[i] !== largestElement){
                secondLargestElement = array[i]
            }
        }
    }

    return secondLargestElement == Number.NEGATIVE_INFINITY ? -1 : secondLargestElement;
}

console.log(secondLargestElement([5, 5, 2, 4, 1, 3]));
