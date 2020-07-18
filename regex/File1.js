/*
    w3resource ====>   blog for regex
*/

var test = '9876543210'
var test1 = '1'
var test2 = '12'
var test3 = '1234'
var test4 = '12345'
var test5 = '12346'


console.log(test.match('^[0-9]{2,5}$'))
console.log(test1.match('^[0-9]{2,5}$'))
console.log(test2.match('^[0-9]{2,5}$'))
console.log(test3.match('^[0-9]{2,5}$'))
console.log(test4.match('^[0-9]{2,5}$'))
console.log(test5.match('^[0-9]{2,5}$'))



console.log("1234567891".match(/^\d{10}$/));
console.log("123-123-1234".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/));
console.log("123.123.1234".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/));
console.log("123 123 1234".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/));
console.log("123-123.1234".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/));
console.log("+12 1234 1234".match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/));
console.log("5473599154249567".match(/^(?:5[1-5][0-9]{14})$/));
console.log("spendela@autorob.inc.in".match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
console.log("aaaaaaaa".match(/^[A-Za-z]\w{7,14}$/));

console.log("aaa1aaaaaaaaa".match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/));