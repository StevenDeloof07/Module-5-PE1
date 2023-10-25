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

function perfect_numbers(min, max) {
    for (let i = min; i < max; i++) {
        if (geef_delers(i) == i) {
            console.log(i);
        }
    }
}

perfect_numbers(1, 1000);
process.exit();