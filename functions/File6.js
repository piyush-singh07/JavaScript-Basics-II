/**
   adding property / functions dynamically in a class / constructor functions then we can use prototype keyword
*/
function class_one() {

};
class_one.prototype.wish = "welcome to es5";

console.log(new class_one().wish); //welcome to es5



function class_one() {

};


//adding fun_one dynamically
class_one.prototype.fun_one = function() {
    return "fun one !!!";
};

//adding fun_two dynamically
class_one.prototype.fun_two = function() {
    return "fun two !!!";
};

//adding var_three variable  dynamically
class_one.prototype.var_three = "fun three !!!";

//adding fun_three dynamically
class_one.prototype.fun_three = function() {
    return this.var_three;
};

let obj = new class_one();
console.log(
    obj.fun_one(),
    obj.fun_two(),
    obj.fun_three()
);