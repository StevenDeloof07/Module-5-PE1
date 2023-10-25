import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const right_number = random(1, 10);

let number = parseInt(await userInput.question("Raad het number: "));

while (number != right_number) {
    if (number > right_number) {
        console.log("Lager");
    }
    else {
        console.log("Hoger")
    }
    number = await userInput.question("");
}
console.log("Correct! Het nummer is " + right_number);
process.exit();