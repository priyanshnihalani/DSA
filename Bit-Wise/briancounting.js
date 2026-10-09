const brian = (num) => {
    let count = 0
    while(num > 0){
        num &= (num - 1)
        count++
    }
    return count
}

console.log(brian(13))

/**
 * 1101 & 1100 = 1100
 * 1100 & 1011 = 1000
 * 1000 & 0111 = 0000
 * 
 * count = 1
 * count = 2
 * count = 3
 */