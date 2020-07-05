/**
 *  const introduced in ES6
 *  reassignement is not possible 
 *  but internal data can be changed
 */

const test1 = 100;
test1 = 900;
console.log(test1); // error because of re assignment


const obj = {
    num: 10
}

obj = {}
console.log(obj) //   TypeError: Assignment to constant variable.


const arr = [10, 20, 30, 40]
arr = [100, 200, 300, 400]

console.log(arr) //TypeError: Assignment to constant variable.

arr[0] = 1000
arr.push(999)

console.log(arr)