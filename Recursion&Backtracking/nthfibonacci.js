const nthfibonacci = (num) => {
    if (num == 0) return 0
    if (num == 1) return 1
    const a = nthfibonacci(num - 1)

    const b = nthfibonacci(num - 2)
    return a + b
}
const result = nthfibonacci(6);
console.log(result);
