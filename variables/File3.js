/**
 * Arrays is a collectio of indexed and heterogeneous elements
 * we can iterate an array using for,forEach,for...of, while loops
 */
var arr1 = [`Angular`, `React`, `Vue`]
var arr2 = [10, 87.66, 90.56, ]

arr1.forEach((element, index) => {
    console.log(element, index)
})

arr1.forEach((element, index) => {
    console.log(element, index)
})

/**
 * Objects 
 * JSON -> used to transfer the data over the network
 * Parsing of JSON is easy is easy as compared to XML format
 * represented as key value pair
 * double quotes for key is optional
 */

var obj = {
    sub_one: 'React',
    sub_two: 'MongoDB',
    sub_three: 'NodeJS'
}

console.log(obj.sub_one);
console.log(obj.sub_two);
console.log(obj.sub_three);