let obj = {
    pid: 'p111',
    pname: 'prod_one',
    pcost: 10000
}

console.log(obj.hasOwnProperty('pname'))

console.log(Object.keys(obj).length);
console.log(Object.values(obj));