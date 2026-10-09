function uniqueouttwo(arr){
let xor = 0
for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i]
}
console.log(xor)
}
uniqueouttwo([1, 1, 2, 2, 3])
    