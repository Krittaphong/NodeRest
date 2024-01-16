function sumTwoSmallestNumbers(numbers) {
    let min = numbers[0]
    let secondMin = numbers[1]

    for (let i = 1; i < numbers.length; i++) {
 
        if (numbers[i] < min) {
            secondMin = min
            min = numbers[i]

        } else if (numbers[i] < secondMin) {
            secondMin = numbers[i];

        }
    }
    return min + secondMin
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNumbers([2, 9, 6, -1]))
console.log(sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))