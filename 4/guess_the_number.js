const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
// Range numbers.Default 0...100
const indendedNumber = Math.floor(Math.random() * 100) + 1;
// Counter attempts
let attempt = 1;


function guessNumber(){
    rl.question("Please enter your number 0...100: ", (userNumber) => {
    if (+userNumber < indendedNumber) {
        rl.write(`Your number ${userNumber} is small! Try again! Your effort is ${attempt} \n`);
    } else if (+userNumber > indendedNumber) {
        rl.write(`Your number ${userNumber} is big! Try again! Your effort is ${attempt} \n`);
    } else if (+userNumber === indendedNumber) {
        rl.write(`You guess the Number! You use effort is ${attempt}`);
        rl.close();
        return;
    } else {
        rl.write(`Wrong enter! Please enter the number between 0...100. You use effort is ${attempt} \n`);
    }
    attempt++ ;
    rl.pause;
    guessNumber();
    });
}

guessNumber()
// Checked Random number
// console.log(indendedNumber);
