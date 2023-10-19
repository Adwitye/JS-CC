//Primitive
// 7types: String, Number, Boolean, Null, undefined,Symbol,BigInt

//Reference (Non primitive)
//Array , Objects, Functions
const score = 100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

//let me show you 2 statemnts that are same as they will give 'undefined' value
let userEmail;
let userEmail1=undefined;
console.log(userEmail);
console.log(userEmail1);

//symbol
const id= Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);

//BigInt
const bigNumber=3345556535n

//Arrays, Objects, Functions 
const heros =["Aditya","Adarsh","Shubham","Om","Shivam"]

//objects
{
    emp:"Ishan";
    empid: 9001,
}
let myObj = {
    name:"Aditya",
    age:18,
}

//functions

const myFunction=function{
    console.log("Hello World");
}

//typeof function to get to know the data type of the variable
//return type of null is object
// function---> object function