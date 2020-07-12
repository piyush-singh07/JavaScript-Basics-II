// in case of map , map allows all kinds of values which can be added but in weakmap it allows only json object to be added for keys


let map = new WeakMap();
//map.set('hello', 'hi')   // error will come as keys and values are not json objects

map.set({ num: 1 }, { 'hi': 'hello' });
map.set({ num: 2 }, 'hello')

console.log(map)

/*
    [[Entries]]
0: {Object => Object}
key: {num: 1}
value: {hi: "hello"}
1: {Object => "hello"}
key: {num: 2}
value: "hello"
__proto__: WeakMap

*/