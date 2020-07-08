/**
 * JSON ---> JavaScript Object Notation
 * also called as JavScript Objects
 * used to transfer the data over the network
 * its a network friendly format
 * its networlk friendly format and its parsing is easier compared to XML
 * its format is in key value pair
 * double quote for key is optional
 */

let obj = {
    sub_one: 'ReactJs',
    sub_two: 'NodeJS',
    sub_three: 'MongoDB'
};

console.log(obj.sub_one, obj.sub_two, obj.sub_three)


let obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};


for (let key in obj2) {
    console.log(key, obj2[key])
};


/**creating a seperate copy without modifying the original copies is called as immutability
     we can achieve immutability by sung seperate operator* 
     spread operator was introduced in ES6
*/

let obj3 = {
    pid: 'P-111'
}

let obj4 = {...obj3 } // making a duplicate copy of obj3 by using the spread operator

console.log(obj3);
console.log(obj4);

obj3.p_name = 'P-NAME';
obj4.p_cost = 2000;

console.log(obj3);
console.log(obj4);

/**
 * mutability means if changes done in one object then it will be reflected in other objects as well
 * we can achieve mutability by using direct assignment
 */


let obj5 = { pid: 111 }
let obj6 = obj5;

console.log(obj5)
console.log(obj6)

obj5.pname = 'Hello'

console.log(obj5)
console.log(obj6)

obj6.pcost = 9000

console.log(obj5)
console.log(obj6)