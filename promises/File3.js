/**
 * async and await
 * introduced in ES9 as an ease for thr then() function from the promises
 * 
 */

let promise1 = new Promise((resolve, reject) => {
    resolve('I am success')
});


// consuming promise1
async function fun_one() {
    let pro = await promise1;
    console.log(pro);
}

//calling function
fun_one();


function add(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 5);
    })
};

function sub(num) {
    return new Promise((resolve, reject) => {
        resolve(num - 3);
    })
};

function mul(num) {
    return new Promise((resolve, reject) => {
        resolve(num * 2);
    })
};

function div(num) {
    return new Promise((resolve, reject) => {
        resolve(num / 2);
    })
};

//consume tthe promises
async function cal() {
    let a = await add(5);
    let b = await sub(a);
    let c = await mul(b);
    let d = await div(c);

    console.log(`Result is ${d}`)
};

//call the async function
cal();