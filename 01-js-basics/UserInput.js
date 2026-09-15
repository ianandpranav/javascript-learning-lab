const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter your name: ", (name) => {
    input.question("Enter your age: ", (age) => {
        age = Number(age);

        console.log(`Hello ${name}, you are ${age} years old.`);

        input.close();
    });
});
