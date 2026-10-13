const simpleHash = (key, tableSize) => {
    let total = 0

    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)    
    }

    return total % tableSize;
}

const table = new Array(10).fill(0)
const value = simpleHash("cat", 10)
table[value] = "cat"

console.log(table[2])