/**
 * Previous example using async await
 */


function add(num) {
    return new Promise(
        (resolve, reject) => {
            resolve(num + 5)
        }
    )
}

function sub(num) {
    return new Promise(
        (resolve, reject) => {
            resolve(num - 3);
        }
    );
}


function mul(num) {
    return new Promise(
        (resolve, reject) => {
            resolve(num * 2)
        }
    )
}


function div(num) {
    return new Promise(
        (resolve, reject) => {
            resolve(num / 2)
        }
    )
}

/**
 * Here also we are writing dependent code but code readability is easy
 * 
 */
async function afunc() {
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(divRes)
}

afunc();