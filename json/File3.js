/**
Some other functions on JSON
*/


//defineProperty()   ---> to customise the properties of the object we can go for this function
let obj = {
    "p_id": 111
};
Object.defineProperty(obj, "p_name", { value: 'p_one', writable: false });
console.log(obj); //{p_id: 111, p_name: "p_one"}
obj.p_id = "p111";
obj.p_name = "product_one";
console.log(obj); //{p_id: "p111", p_name: "p_one"}

Object.defineProperty(obj, "p_cost", { value: 10000, writable: true });
console.log(obj); //{p_id: "p111", p_name: "p_one", p_cost: 10000}
obj.p_cost = 100000;
console.log(obj); //{p_id: "p111", p_name: "p_one", p_cost: 100000}





//defineProperties()  ---> for adding more than 1 property at a time
let obj1 = {
    "p_id": 111
};
Object.defineProperties(obj1, {
    "p_name": { value: "p_one", writable: false },
    "p_cost": { value: 10000, writable: true }
});
console.log(obj1); //{p_id: 111, p_name: "p_one", p_cost: 10000}
obj1.p_id = "p101";
obj1.p_name = "product_one";
obj1.p_cost = 100000;
console.log(obj1); //{p_id: "p101", p_name: "p_one", p_cost: 100000}




//stringify()   ----->convert object to string format

let obj3 = {
    pid: 'p111',
    pname: 'prodone',
    pcost: 10000
};

console.log(obj3)
console.log(typeof obj3)

let str = JSON.stringify(obj3)
console.log(str)
console.log(typeof str)