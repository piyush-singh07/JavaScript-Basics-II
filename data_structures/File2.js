/**
 * Map
 * 
 */
// in map any type of data can be added 
let map = new Map();

let key1 = {};
let value1 = 'hello';



let key2 = { num: 1 };
let value2 = 'bye';

map.set(key1, value1)
    .set(key2, value2)
    .set('sub', 'reactjs')
    .set(100, 100)
    .set(true, false)


console.log(map)


console.log(map.get(key1)); //hello
console.log(map.has(key2)); //true
console.log(map.size); //5
delete map.delete("sub");
console.log(map);
console.log(map.keys());
console.log(map.values());

for (let [k, v] of map) {
    console.log(k, v);
};

map.clear();
console.log(map);


//map dont allow duplicates keys 

let map1 = new Map();

map1.set("key1", 100)
    .set("key1", 200)
    .set("key2", 300)
    .set("key3", 300);
console.log(map1); // key1 previous value will be replaced by new value