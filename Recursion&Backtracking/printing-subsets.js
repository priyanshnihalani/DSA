const subsets = (array) => {

    const result = []
    array.sort((a, b) => a - b)

    const backtrack = (index, subset) => {
        if (index === array.length) {
            result.push([...subset])
            return;
        }

        subset.push(array[index])
        backtrack(index + 1, subset)
        subset.pop()
        backtrack(index + 1, subset)

    }
    backtrack(0, [])
    return result
};

const result = subsets([1,2,2])
console.log(result);
