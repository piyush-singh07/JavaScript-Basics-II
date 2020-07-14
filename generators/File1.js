/*
    1)If we want to control the flow of execution of code in function call then we can go for Generator function
    
    2) Syntax; function * function_name()
    
    3) We have to use yield keyword for controlling the flow
*/

function* fun_one() {

    yield 'ReactJs';
    yield 'NodeJs';
    yield 'MongoDb';
}


let cursor = fun_one();
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())


function* fun_two() {
    for (let index = 0; index < 5; index++) {
        yield index;
    }
}

let cursor2 = fun_two();
console.log(cursor2.next())
console.log(cursor2.next())
console.log(cursor2.next())
console.log(cursor2.next())
console.log(cursor2.next())
console.log(cursor2.next())


function* fun_three() {
    yield 1;
    yield* fun_four();
    yield 3;
    yield 4;
}

function* fun_four() {
    yield 2;
}

let cursor3 = fun_three();

console.log(cursor3.next())
console.log(cursor3.next())
console.log(cursor3.next())
console.log(cursor3.next())
console.log(cursor3.next())