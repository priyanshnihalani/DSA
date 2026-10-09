const permutation = (array) => {
    let result = [];
    let used =  new Array(array.length).fill(false)

    const backtrack = (index, subset) => {
        if(subset.length === array.length){
            result.push([...subset]);
            return;
        }

        if(index == array.length){
            return;
        }

        if(!used[index]){
            used[index] = true
            subset.push(array[index])
            backtrack(0, subset)
            subset.pop()
            used[index] = false;
        }

        backtrack(index + 1, subset)
    }
    backtrack(0, [])
    return result;
};

const result = permutation([1, 2, 3])
console.log(result);
