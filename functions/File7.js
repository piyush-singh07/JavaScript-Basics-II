/**
 * Creating in inheritance in JS
 * 
 */

function class_one() {};

class_one.prototype.getSubOne = function() {
    return 'React Js';
}


function class_two() {};

class_two.prototype = Object.create(class_one.prototype);

class_two.prototype.getSubTwo = function() {
    return 'Deno'
};

let obj = new class_two();

console.log(obj.getSubOne(), obj.getSubTwo())



//prototype chaining
function Parent() {};
Parent.prototype.var_one = "Hello_1";

function Child() {};
Child.prototype = Object.create(Parent.prototype);
Child.prototype.var_two = "Hello_2";

function Subchild() {};
Subchild.prototype = Object.create(Child.prototype);
Subchild.prototype.var_three = "Hello_3";


let obj1 = new Subchild();
console.log(obj1.var_one,
    obj1.var_two,
    obj1.var_three);



//function overriding
function Parent() {};
Parent.prototype.dbFun = function() {
    return "Oracle Data Soon...!";
};

function Child() {};
Child.prototype = Object.create(Parent.prototype);
Child.prototype.dbFun = function() {
    return "MongoDB Data Soon...!";
};

let obj3 = new Child();
console.log(obj3.dbFun()); //MongoDB Data Soon...!