/**
 * IIFE --> Immediate Invokable Function Expression
 * once if we create IIFE, automatically it will call
 * Self Invokable Functions
 * introduced in ES9    
 * Syntax.     (()=>{ //business logic })();
 *                      OR
 *              (function(){Business Logic}())
 */



(() => {
    console.log("welcome to IIFE");
})(); //welcome to IIFE



((arg1, arg2) => {
    console.log(arg1 + arg2);
})(10, 20); //30



// Taking the value from IIFE 
// like if we want to load certain thing at booting time / launching application like hitting a URL 
let res = (() => {
    return "welcome to IIFE";
})();
console.log(res); //welcome to IIFE