// Some of the basic functions:
console.log(true-1);
console.log("5"/"5");
console.log("5"*2);
console.log(Number("456"));
console.log(Number("abcd"));
console.log(String(11234));
console.log(Boolean(0));
console.log(5=='5');
console.log(0==false);
console.log(null==undefined);
console.log(true=='1');
// To print the age:
var age1=24;
var age1=25;
age1=26;
console.log(age1);
//Greet:
function example(){
    if(1){
        var count = 10;
    }
    console.log(count);
}
example();
const greetExpr = function(){
    console.log("Hello");
};
greetExpr();
// Callback:
function process(callback){
    console.log("Processing...");
    callback();
}
function done(){
    console.log("Task Completed");
}
process(done);

function higherOrder(func){
    console.log("Calling the passed function")
}
function sayHi(){
    console.log("Hi from callback");
}
higherOrder(sayHi);
// Greet :
const greet = function(name){
    return "Hello " + name;
};
const greetArrow=(name) => {
    return "HEllo "+name;
}
console.log(greet("Zeni"));
console.log(greetArrow("Naren"));
// to add:
const add=(a,b)=>{
    return a+b;
};
console.log(add(10,5));
//To push:
const fruits=['apple','banana'];
const newLength = fruits.push('orange');
console.log(fruits);
console.log(newLength);

// similar methods are pop(),shift()-to remove last element,unshift()-remove first element!!

let fruit = ['apple','banana','orange'];
console.log(fruit.includes("banana"));
console.log(fruit.includes("grape"));

let numbers = [1,4,7,12,15];
let found = numbers.find(num=>num>10);
// filter()-used to return all numbers greater than the certain value!!
console.log(found);
// print first even number:
let nums = [3,5,7,8,10];
let firstEven = nums.find(n => n% 2 == 0);
console.log(firstEven);
//to find num > 10:
let set=[1,4,7,12,15];
let find = set.map(num=>num > 10);
console.log(find);
//to filter marks greater than 80:
let marks=[10,20,35,50,60,70,80,85,86,90];
let fund = marks.filter(num=>num > 80);
console.log(fund);
//to print only names: 
let students = [
    { name: "Arun", age: 18, grade: "A" },
    { name: "Priya", age: 17, grade: "B" },
    { name: "Kumar", age: 19, grade: "A+" },
    { name: "Sneha", age: 18, grade: "C" }
];
const names = students.map(s => s.name);
console.log(names);
//for in methid:
const student = [
    { name: "Arun", age: 18, grade: "A" },
    { name: "Priya", age: 17, grade: "B" },
    { name: "Kumar", age: 19, grade: "A+" },
    { name: "Sneha", age: 18, grade: "C" }
];
const name = [];

for (let index in students) {
    names.push(students[index].name);
}
console.log(names);
//for off method:
let fru = ['apple','banana','orange'];
for(let f of fru)
{
    console.log(f);
}
//concatenation:
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const combined = [...arr1,...arr2,...arr3];
console.log(combined);
//

