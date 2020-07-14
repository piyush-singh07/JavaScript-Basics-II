function* fun_one() {
    yield "ReactJS";
    yield "NodeJS";
    return "MongoDB";
    yield "Deno";
};
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());