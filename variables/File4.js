// == and ===
console.log(10 == '10') //true
console.log(10 === '10') //false
console.log(1 == '1') //true
console.log(1 === '1') //false




//undefined and null
console.log(undefined == undefined) //true
console.log(undefined === undefined) //true
console.log(null == null) //true
console.log(null === null) //true
console.log(undefined == null) //true
console.log(undefined === null) //false

//Apart from the + operator the string will be converted to number type
console.log(10 + "10")
console.log(10 + parseFloat("10"))
console.log(10 - "10")



//while performing addition on fractions then JS follows more accuracy with 64 bit algo
console.log(0.1 + 0.2 == 0.3)
console.log(0.1 + 0.2 === 0.3)