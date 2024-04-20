// for-each loop 
// it only works on array

var a = [1,2,3,34,45,4,5,6,7]
// a.forEach(function(val){
//     console.log(val+2);
// })

a.forEach((val)=>{
    console.log(val+2);
})

// by default in js console.log prints everytime in a new line. Now to print every element
// in a single line we may use the below given code
var arr=[]
for(var i=0; i<9; i++){
    arr.push(a[i]);
}
console.log(arr.join(','))


// for-in loop 
//this is used to apply loops on objects

let obj={
    fname:"Aditya",
    lname:"Jha",
    college:"ITS",
    university:"AKTU",
    rollNo:123456789,
    sem:6
}

for(let key in obj){
    console.log(key);
}

console.log("");

//above for-in only prints keys 
//below given prints the keys as well as its values too 
for(let keys in obj){
    console.log(keys+" : "+obj[keys]);
}