/**
   adding property / functions dynamically in a class / constructor functions then we can use prototype keyword
*/
function class_one() {

};
class_one.prototype.wish = "welcome to es5";

console.log(new class_one().wish); //welcome to es5