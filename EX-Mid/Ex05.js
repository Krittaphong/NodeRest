function  getBudgets(arr){
    let total = 0;
    for (let i =0; i < arr.length; i++) {
        total += arr[i].budget;
    }
    return total;

}
console.log(getBudgets([
    {name: "John", age:21 , budget:23000},
    {name: "Steve", age:32 , budget:40000},
    {name: "Marthin", age:16 , budget:2700},
]));

console.log(getBudgets([
    {name: "John", age:21 , budget:29000},
    {name: "Steve", age:32 , budget:32000},
    {name: "Marthin", age:16 , budget:1600},
]));
