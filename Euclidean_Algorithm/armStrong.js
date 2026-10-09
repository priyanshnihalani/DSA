const armStrong = (num) => {
    let armNum = 0
    let originalNum = num;
    while (num > 0) {
        let lastDigit = num % 10
        armNum = (lastDigit ** 3) + armNum
        num = Math.floor(num / 10);
    }
    return armNum == originalNum ? 'Armstrong' : 'Not ArmStrong'
}

console.log(armStrong(1))