function add(num, callback) {
    return callback(num + 5, false);
}

add(5, (addRes, error) => {
    if (!error) {
        console.log(addRes)
    }
});


function sub(num, callback) {
    return callback(num - 3, false);
}

add(
    5, (addRes, error) => {
        if (!error) {
            sub(addRes, (subRes, error) => {
                if (!error) {
                    console.log(subRes)
                }

            })
        }
    }

);

function mul(num, callback) {
    return callback(num * 2, false)
};

add(
    5, (addRes, error) => {
        if (!error) {
            sub(addRes, (subRes, error) => {
                if (!error) {
                    mul(subRes, (mulRes, error) => {
                        if (!error) {
                            console.log(mulRes)
                        }
                    })
                }

            })
        }
    }

);

function div(num, callback) {
    return callback(num / 2, false)
};

/**
 * Below is an example of callback hell
 * 4th depending on 3rd , 3rd depending on 2nd, 2nd on 1st
 * Its a writing of tightly coupled code
 */

add(
    5, (addRes, error) => {
        if (!error) {
            sub(addRes, (subRes, error) => {
                if (!error) {
                    mul(subRes, (mulRes, error) => {
                        if (!error) {
                            div(mulRes, (divRes, error) => {
                                console.log(divRes)
                            })
                        }
                    })
                }

            })
        }
    }

);