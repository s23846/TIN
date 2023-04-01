const secondMinMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let secondMin = arr[0];
    let secondMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin) {
            secondMin = arr[i];
        }

        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return [secondMin, secondMax];
}