function numberSplit(n) {
    return [Math.floor(n / 2), Math.ceil(n / 2)];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));