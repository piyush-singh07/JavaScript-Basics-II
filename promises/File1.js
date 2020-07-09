/*
    promises
    --------
        Promises Establishes the communication between producer and consumer.

        Promises also called as special javascript objects.

        Promises have 3 states.

        1) success (resolve)
        2) failure   (reject)
        3) pending

        we will create Promises by using "Promise" class constructors
*/
let promise1 = new Promise((success, failure) => {
    success(`Tomoroow we will go for shopping!!!`);
});

promise1.then((sucRes) => { console.log(sucRes) }, (errorRes) => { console.log(errorRes) });



//at a time only 1 will be executed either failure or success , both can never be executed
let promise2 = new Promise((resolve, reject) => {

    reject('Failure Response'); // this will be executed

    resolve('Success Response');
});

promise2.then((resolveResponse) => { console.log(resolveResponse) },
    (rejectResponse) => { console.log(rejectResponse) });


//at a time only 1 will be executed either failure or success , both can never be executed
let promise3 = new Promise((resolve, reject) => {

    resolve('Success Response'); // this will be executed

    reject('Failure Response');
});

promise3.then((resolveResponse) => { console.log(resolveResponse) },
    (rejectResponse) => { console.log(rejectResponse) });


let promise4 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve('I am success')
        }, 5000);

        setTimeout(() => {
            reject('I am failure')
        }, 3000); //this will be executed as after 3 sec its mentioned
    }
);

promise4.then((resolveResponse) => { console.log(resolveResponse) },
    (rejectResponse) => { console.log(rejectResponse) });