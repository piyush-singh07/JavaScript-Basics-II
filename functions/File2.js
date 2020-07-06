/**
 * Anonymous Functions / Arrow Functions / Fat Arrow Functions / Callback Functions
 * introduced in ES6
 */

let outer = () => {
    return () => {
        return 'Hello'
    };
}


console.log(outer()) // funtcion definition of outer function
console.log(outer()()) // output from outer function



let networkCall = (successCall, failureCall) => {
    console.log(successCall(), failureCall())
};


networkCall(() => { return 'Success' }, () => { return 'Failure' })



let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(
        () => {
            return "hello"; // array will contain 5 function definitions
        }
    );
};

arr.forEach((element, index) => {
    console.log(element(), index); // printing the elements
});