const factorials = (num) => {
    if(num == 0) return 0;
    if(num == 1) return 1;

    return num * factorials(num - 1)
}

const result = factorials(5)
console.log(result);
