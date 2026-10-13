const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }        
    }
    return arr
}

const result = bubbleSort([2, 5, 4, 6, 1, 3])
console.log(result);
