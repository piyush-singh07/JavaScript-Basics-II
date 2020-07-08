/**
 * Different functions in JSON 
 * 
 */

//freeze() function in JSON    ----> allows only readability
let obj1 = {
    pid: 111
}
Object.freeze(obj1)
console.log(obj1) // reading is possible
obj1.pid = 999
obj1.pname = 'Hello'
delete obj1.pid
console.log(obj1)


//seal() ------->  read and update access only
let obj2 = {
    pid: 222
}

Object.seal(obj2)

console.log(obj2)

obj2.pid = 8888

console.log(obj2)

obj2.pname = 'Hello2'

delete obj2.pid;

console.log(obj2)

//delete() ----> to delete particular key value pair we can go for delete()

let obj3 = {
    pid: 111,
    pcost: 20000,
    pname: 'pop'
}

console.log(obj3)

delete obj3.pname

console.log(obj3)


//assign()----> to merge multiple json objectsbut assign is old so we can go for spread operator from ES6

let obj10 = { "p_id": 111 };
let obj20 = { "p_name": "p_one" };
let obj30 = { "p_cost": 10000 };

console.log(Object.assign(obj10, obj20, obj30)); //{p_id: 111, p_name: "p_one", p_cost: 10000}
console.log({...obj10, ...obj20, ...obj30 }); //{p_id: 111, p_name: "p_one", p_cost: 10000}


//entries() and fromEntries() converion from json to array and vice versa

let obj40 = {
    "p_id": 111,
    "p_name": "p_one",
    "p_cost": 10000
};
let arr = Object.entries(obj40); //OBJECT TO ARRAY
console.log(arr); //[Array(2), Array(2), Array(2)]  

let obj50 = Object.fromEntries(arr);
console.log(obj50);