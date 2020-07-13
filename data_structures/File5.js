// WeakSet allows only json object to be added


let wset = new WeakSet();

//wset.add(20); // TypeError: Invalid value used in weak set

wset.add({ num: 1 })
    .add({ num: 2 })
    .add({ num: 3 })
    .add({ num: 4 })
    .add({ num: 5 });

console.log(wset)