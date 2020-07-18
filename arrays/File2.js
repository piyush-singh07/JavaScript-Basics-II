let arr = [20, 10, 0, 45, 80];
console.log(arr.map((element, index) => {
    return element * 10;
}))


console.log(arr.filter((element, index) => {
    return element >= 20
}))

console.log(arr.map((element) => {
    return element * 10;
}).filter((element) => {
    return element >= 200;
}));


console.log(arr.map((element) => {
    return `$` + element;
}))