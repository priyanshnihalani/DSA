const multiply = (num1, num2) => {
     return num1 << (num2 - 1) 
}

const divide = (num1, num2) => {
     return num1 >> (num2 - 1)
}

console.log(multiply(4, 2))
console.log(divide(4, 2))
