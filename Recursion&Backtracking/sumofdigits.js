const sumofdigits = (num) => {
    if(num == 0) return 0;
    return num + sumofdigits(num - 1)
}

const result = sumofdigits(5)
console.log(result);
