// This function find prime numbers and add it in array of length of choice you.
function findSimpleNumbers (qty) {
    const arrNumbers = [];
    nextNumber:
    for (let i = 2; arrNumbers.length < qty; i++) { 
        for (let j = 2; j < i; j++) { 
          if (i % j == 0) continue nextNumber; // This number is not prime. Check next number.
        }
        arrNumbers.push(i);
    }
    return arrNumbers;
    }

console.time();
console.log(findSimpleNumbers(process.argv[2]));
console.timeEnd();