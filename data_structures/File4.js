// a datastructure which does not allow duplicate values to be added 

let set = new Set();
console.dir(set);


set.add(true)
    .add(false).add(30).add(80).add('hello').add({ 'one': 'two' }).add(80).add({ 'one': 'two' });

console.log(set); //Set { true, false, 30, 80, 'hello', { one: 'two' }, { one: 'two' } }

let set2 = new Set([10, 20, 30, 20, 30, 20, 40, 50]) // a constructor for set which takes array as parameter
console.log([...set2]) // to get set as array



console.log([...new Set([1, 2, 3, 4, 3, 2, 1, 4])]) // to get set as array



let set1 = new Set();
let value1 = 10;
let value2 = "hello";
let value3 = true;
let value4 = { num: 1 };
let value5 = [10, 20, 30, 40, 50];
//let value6 = 100 n;
let value7 = Symbol(100);
let value8 = { num: 1 };

set1.add(value1)
    .add(value2)
    .add(value3)
    .add(value4)
    .add(value5)
    //  .add(value6)
    .add(value7)
    .add(value8);
console.log(set1);
console.log(set1.size); //7

set1.delete(value7);
console.log(set1);

console.log([...set1.values()]); // for getting in array form
console.log([...set1.keys()]); // for getting in array form

let cursor = set1.entries();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

set1.clear();
console.log(set1); //{}