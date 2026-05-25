// Exercise 1: Temperature check (if-else)
let temperature = 18;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Switch version
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility check
let num = 6;

if (num % 2 === 0 && num % 3 === 0) {
    console.log("Divisible by both.");
} else if (num % 2 === 0) {
    console.log("Divisible by 2.");
} else if (num % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Switch version
switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (num % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (num % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// For loops
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) console.log(i);

console.log("Even numbers 1 to 20:");
for (let i = 2; i <= 20; i += 2) console.log(i);

let sumFor = 0;
for (let i = 1; i <= 100; i++) sumFor += i;
console.log("Sum 1 to 100:", sumFor);

const nums = [1, 2, 3, 4, 5];
nums.forEach(n => console.log(n));

const largerNums = [3, 7, 2, 5, 10, 6];
let largest = largerNums[0];
for (let i = 1; i < largerNums.length; i++) {
    if (largerNums[i] > largest) largest = largerNums[i];
}
console.log("Largest number:", largest);

// While loops
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

let sumWhile = 0;
let j = 1;
while (j <= 100) {
    sumWhile += j;
    j++;
}
console.log("Sum while loop:", sumWhile);

let mult = 5;
while (mult < 50) {
    console.log(mult);
    mult += 5;
}

// Do-while loops
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

let sumDo = 0;
let m = 1;
do {
    sumDo += m;
    m++;
} while (m <= 100);
console.log("Sum do-while:", sumDo);

// Prompt until number > 10
let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (userInput <= 10);
console.log("Valid number entered:", userInput);

// Guessing game
const secret = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== secret);
console.log("Correct! The number was", secret);