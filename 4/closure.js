const accessPass = "admin"
var readline = require('readline-sync');


function getPasswordChecker(expected) {
    return (actual) => {
        if(actual === expected) {
            console.log("Access is allowed");
            return true;
        }
        console.log("Access denied");
        return false;
    }
 }
 
 
 function test(checker, actualPass) {
    return checker(actualPass); 
 }
 

    var enterPass = readline.question("Please enter password: ");   
    let checker = getPasswordChecker(accessPass);
    test(checker, enterPass);