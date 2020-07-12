/* let obj = {};
let key1 = {};
let value1 = 'hello';
obj.key1 = value1;

console.log(obj)


let key2 = { num: 1 };
let value2 = 'bye';

obj.key2 = value2;
console.log(obj); */

let obj = {};
let key1 = {};
let value1 = 'hello';
obj[key1] = value1;

console.log(obj) //{ '[object Object]': 'hello' }


let key2 = { num: 1 };
let value2 = 'bye';

obj[key2] = value2;
console.log(obj); //{ '[object Object]': 'bye' } here hello will be replaced by bye 

/**
  Data Structures
    ----------------    
        - in json, if we add more than one key&value pairs, old key&value pairs overridden by latest key&value pairs.

        - we can't maintain multiple copes.

        - to maintain, multiple copies vendor released data structures.

        1) Map

        2) WeakMap

        3) Set

        4) WeakSet 
 */