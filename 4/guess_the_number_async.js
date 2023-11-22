const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// Range numbers.Default 0...100
const indendedNumber = Math.floor(Math.random() * 100) + 1;
// Counter attempts
let attempt = 1;


async function getUserInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Please enter your number between 0...100: ', (inputNumber) => {
            rl.pause();
            return resolve(+inputNumber); 
        });  
    })
    return await promise;
}

async function guessNumber(){
    while (true){
        let userNumber = await getUserInput();
        if (userNumber < indendedNumber) {
            rl.write(`Your number ${userNumber} is small! Try again! Your effort is ${attempt} \n`);
        } else if (userNumber > indendedNumber) {
            rl.write(`Your number ${userNumber} is big! Try again! Your effort is ${attempt} \n`);
        } else if (userNumber === indendedNumber) {
            rl.write(`You guess the Number! You use effort is ${attempt}`);
            rl.close();
            break;
            // return;
        } else {
            rl.write(`Wrong enter! Please enter the number between 0...100. You use effort is ${attempt} \n`);
        }
        attempt++ ;
        rl.pause;
        // guessNumber();
        };
    };
guessNumber();
// Checked Random number
console.log(indendedNumber);