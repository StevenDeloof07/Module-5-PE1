import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function say_hello(name_input) {
    console.log("Hello " + name_input);
}
let name_input = await userInput.question("Enter your name: ");
say_hello(name_input);
process.exit();