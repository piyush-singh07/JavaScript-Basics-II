 /**
  * let -> to declare the variables
  * introduced in ES6
  * 
  */


 // 1. var does not follow scope rule while let follows the scope rule
 for (var i = 0; i < 5; i++) {

 };
 console.log(i) // 5


 for (let j = 0; j < 5; j++) {

 };
 console.log(j) // ReferenceError: j is not defined


 // 2. Global Polluting issue
 var data = 100;
 console.log(data); //100

 {
     var data = 200
     console.log(data); //200
 }

 console.log(data); //200

 let data = 100;
 console.log(data); //100

 {
     let data = 200
     console.log(data); //200
 }

 console.log(data); //100


 // var allows redeclaring while let doesnot allow
 var data = 100;
 var data = 200;
 console.log(data); // 200

 let data1 = 100;
 let data1 = 200;
 console.log(data1); //SyntaxError: Identifier 'data1' has already been declared

 // variable hoisting

 console.log(data);
 var data = 100; // undefined

 console.log(data)
 let data = 900 //ReferenceError: Cannot access 'data' before initialization

 function fun_one() {
     console.log(data);
 }
 fun_one();
 var data = 100; // undefined


 function fun_one() {
     console.log(data);
 }
 fun_one();
 let data = 100; // ReferenceError: Cannot access 'data' before initialization