// console.log(2>1); true
// console.log(2>=1); true
// console.log(2==1); false

// console.log("2">1); true
// console.log("02">1); true

// console.log(null==0); false, For equality, null only strictly equals 'null' and 'undefined'.
// console.log(null>0); false, here null is converted to 0 and then comparison happen 0>0 (false)
// console.log(null>=0); true, 0>=0 (true)

// console.log(undefined>0); false
// console.log(undefined==0); false
// console.log(undefined>=0); false

// strict check "===" , not only the value but also the data type
console.log("2"===2); false