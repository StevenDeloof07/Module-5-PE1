import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function circle(radius) {
    return Math.PI * radius ** 2;
}

function rectangle(side1, side2) {
    return side1 * side2;
}

function triangle(side1, side2) {
    return rectangle(side1, side2) / 2;
}

function square(side) {
    return rectangle(side, side);
}