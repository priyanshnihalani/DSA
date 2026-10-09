const gcd = (a, b) => {
    while (a!=0 || b!=0) {
        let reminder = a % b;
        a = b;
        b = reminder;
    }
    return a;
}

console.log(gcd(24, 105))

// The gcd function calculates the greatest common divisor (GCD) of two numbers a and b using the Euclidean algorithm. It repeatedly replaces a with b and b with the remainder of a divided by b until one of them becomes zero. The last non-zero value is the GCD.
//  explaination of the code:
// 1. The function gcd takes two parameters, a and b.
// 2. It enters a while loop that continues as long as either a or b is not zero.
// 3. Inside the loop, it calculates the remainder of a divided by b and assigns it to the variable reminder.
// 4. It then updates a to be the value of b and b to be the value of reminder.
// 5. Once the loop exits (when either a or b is zero), it returns the value of a, which is the GCD of the original two numbers.