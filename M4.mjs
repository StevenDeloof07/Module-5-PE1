import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function geef_delers(number) {
    let som = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            som += i
        }
    }
    return som;
}

const number = parseInt(await userInput.question("Geef me het nummer: "));
console.log(geef_delers(number));
process.exit();