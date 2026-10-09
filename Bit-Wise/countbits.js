const activebits = (num) => {
    let count = 0
    while (num > 0){
        count += num & 1;
        num >>= 1
    }
    return count
}

console.log(activebits(4))

const inactivebits = (num) => {
    let count = 0;
    while(num > 0){
        count += !(1 & num);
        num >>= 1;
    }
    return count
}

console.log(inactivebits(4))