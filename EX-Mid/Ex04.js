function totleVolume(n){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i][0] * arguments[i][1] * arguments[i][2];       
    }
    return total;
}

console.log(totleVolume([4,2,4] , [3,3,3] , [1,1,2] , [2,1,1]));
console.log(totleVolume([2,2,2] , [2,2,1]));
console.log(totleVolume([1,1,1]));