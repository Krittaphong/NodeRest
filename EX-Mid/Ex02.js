function hightestdigit(n){
    let max = 0;
    while (n > 0){
        let digit = n % 10;
        if (digit > max) {
            max = digit;
        }
        n = Math.floor(n/10);
    }
    return max;
}
console.log(hightestdigit(379));
console.log(hightestdigit(2));
console.log(hightestdigit(377401));
