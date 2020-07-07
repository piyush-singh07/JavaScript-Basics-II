/**
 * Default Parameter Functions
 * While defining a function if parameters are initialized with default values then those functions are called as DPF
 * introduced in ES6
 */



function fun_one(arg1 = 'ReactJs', arg2 = 'NodeJs', arg3 = 'AngularJs') {
    console.log(arg1, arg2, arg3)
}


fun_one(); // ReactJs, NodeJs, AngularJs
fun_one('Angular10'); // Angular10,NodeJs,AmgularJs
fun_one(undefined, undefined, undefined); // undefined means original values will never be affected so output will be defalut values
fun_one(null, null, null); // original values  will be affected so null,null,null


/**
 * Combination of Default , Normal and Rest Parameters
 */


function f1(arg1, arg2 = 'Hello2', ...arg3) // spread operator shold be the last parameter
{
    console.log(arg1, arg2, arg3);
}


f1() // undefined, Hello2, []
f1('Hello1') // Hello1,Hello2,[] 
f1(undefined, undefined, undefined) //undefined Hello2 [ undefined ]
f1(null, null, null) //null null [ null ]
f1('Hello1', undefined, 'Hello3', 'Hello4') //Hello1 Hello2 [ 'Hello3', 'Hello4' ]