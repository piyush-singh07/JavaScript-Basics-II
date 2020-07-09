let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success_1');
    }, 5000)
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success_2');
    }, 0)
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success_3');
    }, 10000)
});


promise1.then((successResponse) => { console.log(successResponse) },
    (rejectResponse) => { console.log(rejectResponse) });

promise2.then((successResponse) => { console.log(successResponse) },
    (rejectResponse) => { console.log(rejectResponse) });

promise3.then((successResponse) => { console.log(successResponse) },
    (rejectResponse) => { console.log(rejectResponse) });

/*
If we want to consume multiple promises at a time then we can use Promise.all() function  but it will wait till the last timeout and give the collective result
like CompletableFuture.allOf().join()

Here if anyone is failure then error will come even though others are success. This is because of the Promise.all()
If all success then only success
and if anyone is failure the fail...

Works like AND operation

So here to get all success and failure the we need to go for Promise.allSettled() function => this function is introduced in ES11 i.e., ES2020 in 2020 

*/
Promise.all([promise1, promise2, promise3]).then(
    (posRes) => {
        console.log(posRes[0]);
        console.log(posRes[1]);
        console.log(posRes[2]);
    },
    (erroeResponse) => {
        console.log(erroeResponse)
    }
)

Promise.allSettled([promise1, promise2, promise3]).then(
        (posRes) => {
            console.log(posRes[0]);
            console.log(posRes[1]);
            console.log(posRes[2]);
        },
        (erroeResponse) => {
            console.log(erroeResponse)
        }
    )
    /*
    	To know who will execute first / will win the race then we need to go for Promise.race() method
    	but the application will be terminated after the maximum time in the promise.
    	
    */
Promise.race([promise1, promise2, promise3]).then(
    (posRes) => {
        console.log(posRes);
    },
    (erroeResponse) => {
        console.log(erroeResponse)
    }
)


/*
	while working with realtime aoplications we should never give priority to the callback functions as it will create call back hells
	so to overcome this , in ES9 async await was introduced.
	If we want to skip the then() function usage then we should use async and await
	
	we should never go for then() function as its argument is callbacks() function and it creates callback hell 
*/

//async & await