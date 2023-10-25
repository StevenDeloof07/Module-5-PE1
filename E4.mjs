import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function factorial(number) {
    let total = 0
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

let number = parseInt(await userInput.question("Geef een number: "));
console.log(factorial(number))