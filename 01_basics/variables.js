const accountId = 210222164
let accountEmail = "xyz@google.com"
var accountPassword="12345"
accountCity="Delhi" // we can also create variables like this in JS, but it is not a recommended way to make variables

// accountId=2 //not allowed
console.log(accountId)
accountEmail="asj@gmail.com"
accountPassword="414312"
accountCity="Greater Noida"
let accountState;

//instead of using console log every time for different variable printing, we can use console table
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*
prefer not to use var, because of issues in block scope and functional scope
*/


/*
Another way of making comments in our code files
*/