/**
 * Rest Parameters Functions
 * It can hok\ld more than 1 arguments 
 * 
 * function fun_one(...args)
 * {
 *          // same like var args method of java
 * }
 * rest parameter have the capability to hold "array of values".
 * we will represent rest parameter by using "..."
"..." called as spread operator
"..." operator introduced in "ES6"
we can have only "one spread operator" per function.
position of spread operator should be "last in arguments".
 */

/*
function fun_one(...arg1, ...arg2) {} //SyntaxError: Rest parameter must be last formal parameter


function fun_one(...arg1, arg2) {} //SyntaxError: Rest parameter must be last formal parameter

function fun_one(args1, ...args2)
*/

function fun_one(...args) {
    console.log(args);
}


fun_one(20);

fun_one(10, 20);

fun_one('Angular', 'Node', 'React');

fun_one();

fun_one(undefined);

fun_one(undefined, null)



function fun_two(arg1, ...arg2) {
    console.log(arg1, arg2)
}

fun_two();
fun_two(undefined);
fun_two(null);
fun_two(undefined, undefined);
fun_two(null, null);
fun_two('Hello1', 'Hello2');

/**   OUTPUT
 * undefined []
undefined []
null []
undefined [ undefined ]
null [ null ]
Hello1 [ 'Hello2' ]
 * 
 * 
*/