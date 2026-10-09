const reverseNumberWithSign = (num) => {
    let isNegative = num < 0;
    num = Math.abs(num);

    let revNum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        revNum = (revNum * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -revNum : revNum;
};

console.log(reverseNumberWithSign(-123));