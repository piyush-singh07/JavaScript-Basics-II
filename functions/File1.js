/**
 *  Named Functions
 */

function fun_one() {
    return 'Hello from JavaScript!!!'
}


console.log(fun_one) // WITHOUT PARANTHESIS IF WE CALL THEN FUNCTION DEFINITION WILL COME 

console.log(fun_one()) // WE WILL GET THE FUNCTION OUTPUT


function fun_two() {
    return fun_three;
}

function fun_three() {
    return 'I am inner function';
}


console.log(fun_two) //  fun_two definition
console.log(fun_two()) // fun_three definition
console.log(fun_two()()) // output



function fullstack_ui(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
};
fullstack_ui("Angular", "NodeJS", "MongoDB");
fullstack_ui("ReactJS", "NodeJS", "MySQL");
fullstack_ui("VueJS", "NodeJS", "SQLServer");



let arr = [];

function fun_one() {
    return "hello";
};

for (let i = 0; i < 5; i++) {
    arr.push(fun_one) //pushing fun_one definition for 5 times
};

arr.forEach((element, index) => {
    console.log(element(), index); // returns hello 5 times
});



let data = 100;

function data() {
    return data;
};

console.log(data); //Uncaught SyntaxError: Identifier 'data' has already been declared



function fun_one() {
    var data = 100; {
        var data1 = 200;
    }
    return data1;
};


console.log(fun_one()); //let : Uncaught ReferenceError: data1 is not defined
//var : 200 as the var has global scope

console.log(data); //demo.html:123 Uncaught ReferenceError: data is not defined