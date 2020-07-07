/**
 * Constructor Functions
 * 
 * Using Constructor Functions we can have classes like structure
 * Before ES6 , Collection of functions and variables were considered as classes/ constructor functions
 * All the members shoul start with this keyword 
 */


function class_1() {
    this.sub_one = 'ReactJS';
    this.sub_two = 'NodeJS';
    this.sub_three = 'MongoDB';

    this.UI_layer = function() {
        return this.sub_one;
    };

    this.Server_Layer = function() {
        return this.sub_two;
    }

    this.DB_Layer = function() {
        return this.sub_three;
    }
};

let obj = new class_1();

console.log(obj.UI_layer(), obj.Server_Layer(), obj.DB_Layer())



function class_two(arg1, arg2, arg3) {
    this.param1 = arg1;
    this.param2 = arg2;
    this.param3 = arg3;
}


let obj2 = new class_two('Hello1', 'Hello2', 'Hello3');

console.log(obj2.param1, obj2.param2, obj2.param3);


function mern(s_o, s_t, db_s) {
    this.getSub = function() {
        return `MERN Stack Means....${s_o}<=>${s_t}<=>${db_s}`;
    };
};

function class_one() {
    this.getSub = function() {
        return "ReactJS";
    }
};

function class_two() {
    this.getSub = function() {
        return "NodeJS";
    }
};

function class_three() {
    this.getSub = function() {
        return "MongoDB";
    }
};
console.log(
    new mern(new class_one().getSub(),
        new class_two().getSub(),
        new class_three().getSub()).getSub()
);