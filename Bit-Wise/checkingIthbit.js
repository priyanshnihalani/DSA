const checkingithbit = (bit, num) => {
    const checkingIthbit = (1 << bit) & num

    if(checkingIthbit !== 0){
        console.log("Present")
        console.log(checkingIthbit)
    }else{
        console.log("Not Present")
        console.log(checkingIthbit)
    }
}

checkingithbit(1, 2)