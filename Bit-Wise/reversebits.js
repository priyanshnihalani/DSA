const reverseBits = (num) => {
    let result = 0
    while(num > 0){
        let bit = num & 1
        result = (result << 1) | bit
        num >>= 1
    }
    return result
}

console.log(reverseBits(5))