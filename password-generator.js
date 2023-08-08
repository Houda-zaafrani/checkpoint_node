
var generatePassword = require('generate-password')
 
var password = generatePassword.generate({
    length : 10,
    numbers : true
})
var multiplePasswords = generatePassword.generateMultiple(3, {
    length : 10,
    numbers : false,
    uppercase : true
    
})
console.log(password)
console.log(multiplePasswords);