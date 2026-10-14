const moverZeroes = (array) => {
    let i = 0;
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] == 0 && !array[j] == 0) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
        }
        else if(array[i] == 0 && array[j] == 0){
            continue;
        }
        else{
            i++
        }
    }
    return array
}

console.log(moverZeroes([0, 0, 1]))