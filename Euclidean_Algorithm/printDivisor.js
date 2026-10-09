const printDivisor = (num) => {
    if (num <= 1) return false;
    let factorials = []
    for (let i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            factorials.push(i)
            if(num / i !== i){
                factorials.push(Math.floor(num / i))
            }
        }

    }
    return factorials.sort((a, b) => a - b)
}

console.log(printDivisor(36));