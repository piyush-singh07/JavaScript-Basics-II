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


function fun_one(...arg1, ...arg2) {} //SyntaxError: Rest parameter must be last formal parameter


function fun_one(...arg1, arg2) {} //SyntaxError: Rest parameter must be last formal parameter


function fun_one(args1, ...args2)