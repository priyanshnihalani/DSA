const turnoff = (i, num) => {
    return num & ~(1 << i)
}

console.log(turnoff(2, 7))
// 0111
// 0001

/** 
 *   0111
 * & 0100  
 * -----
 *   0011
 */


const toggle = (i, num) => {
    return num ^ (1 << i)
}
// 0111
// 0001

/** 
 *   0111
 * ^ 0100  
 * -----
 *   0011
 */

const turnon = (i, num) => {
    return num | (1 << i)
}
// 0011
// 0100

/** 
 *   0011
 * | 0100  
 * -----
 *   0111
 */

console.log(turnon(2, 3))