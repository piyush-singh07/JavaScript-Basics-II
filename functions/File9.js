/**
    - Optional Parameters introduced in ES6.

    - Optional Parameters will work in TypeScript Environment.

    - we will represent Optional Parameters by using "?"

    - Optional Parameters means "Parameters are Optional".

    - we will install TypeScript by using following command.

        > npm install -g typescript@latest

    - we will save TypeScript files by using ".ts" extension.
*/


/* function fun_one(arg1?: string,
    arg2?: string,
    arg3?: string): void {
    console.log(arg1, arg2, arg3);
};
fun_one(); //undefined undefined undefined
fun_one("ReactJS"); //ReactJS undefined undefined
fun_one("React Native", "NodeJS", "MongoDB"); //React Native NodeJS MongoDB
fun_one(undefined,
    undefined,
    undefined); //undefined undefined undefined
fun_one(null,
    null,
    null); //null null null


//combination of normal with optional
function fun_one(arg1: any, arg2?: any): void {
    console.log(arg1, arg2);
};
fun_one(); //Expected 1-2 arguments, but got 0.
fun_one("Hello_1"); //Hello_1 undefined
fun_one("Hello_1", "Hello_2"); //Hello_1 Hello_2
fun_one(undefined, undefined); //undefined undefined
fun_one(null, null); //null null

normal,
default, optional and rest
 */
function fun_one(normal, Default, optional) {
    if (Default === void 0) { Default = "Hello_2"; }
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    console.log(normal, Default, optional, rest);
};
//fun_one();        //Expected at least 1 arguments, but got 0.
fun_one("Hello_1", undefined, "Hello_3", "Hello_4"); //