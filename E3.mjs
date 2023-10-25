import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function convert(is_celsius, temperature) {
    if (is_celsius == "ja" ) {
        return temperature * 1.8 + 32;
    }
    else {
        return (temperature - 32) / 1.8; 
    }
}

let is_celsius = await userInput.question("Is de temperatuur Celsius? ");
let temperature = await userInput.question("Wat is de temperatuur? ");

console.log(convert(is_celsius, temperature));

process.exit()