/**
 * Callback : Passing one funtion definition to another function as an argument
 */

function f1(arg) {

    console.log(arg());

};


f1(
    function f2() {
        return 'Welcome to Callbacks!!!'
    }
);