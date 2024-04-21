let score = "33"

// const {score} = req.body
// console.log(typeof score); 
// console.log(typeof(score)); we can also write it as a method typeof() 

let a="10abc"
let valueInNumber = Number(a) //type conversion
console.log(typeof valueInNumber); // converted '10abc' into number 
console.log(valueInNumber); //NaN

//string converted into number(written below)
//"33" => 33
// "33abc" => NaN
//true =>1; false=>0

let isLoggedIn = "aditya"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//converted into boolean (written below)
// 1=> true; 0=>false
// ""=> false,  empty string if converted to boolean gives false as value
// "aditya"=>true

let someNumber=33
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//typeof(NaN) is Number
//typeof(null) is object

let b=null
console.log(typeof(b)); // object,  typeof(null) is object
let c= Number(b); //null converted into 'Number', it becomes 0
console.log(c); // 0
console.log(typeof c);