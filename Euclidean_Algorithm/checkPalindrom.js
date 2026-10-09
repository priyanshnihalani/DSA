const reverseNumberWithSign = (num) => {
    let isNegative = num < 0;
    let originalNum = num;    
    num = Math.abs(num);

    let revNum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        revNum = (revNum * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    const result = isNegative ? -revNum : revNum;
    return result == originalNum ? true : false;
};

console.log(reverseNumberWithSign(22)); 