const factorial1 = (number) => {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial1(number - 1);
    }
}

const factorial2 = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}