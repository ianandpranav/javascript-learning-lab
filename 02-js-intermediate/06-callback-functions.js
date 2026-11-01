
// 1. Basic Callback Function

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    let name = "Anand";

    callback(name);
}

processUser(greet);


// 2. Callback with Addition

function calculate(a, b, callback) {
    let result = a + b;

    callback(result);
}

function displayResult(value) {
    console.log("Result:", value);
}

calculate(10, 20, displayResult);


// 3. Callback Using Anonymous Function

function multiply(a, b, callback) {
    let result = a * b;

    callback(result);
}

multiply(5, 4, function(result) {
    console.log("Multiplication:", result);
});


// 4. Callback Using Arrow Function

function divide(a, b, callback) {
    let result = a / b;

    callback(result);
}

divide(20, 5, (result) => {
    console.log("Division:", result);
});


// 5. Synchronous Callback

console.log("Start");

function showMessage(callback) {
    callback();
}

showMessage(function() {
    console.log("Callback executed");
});

console.log("End");


// 6. Asynchronous Callback Using setTimeout

console.log("Task Started");

setTimeout(function() {
    console.log("Task completed after 2 seconds");
}, 2000);

console.log("Other task running");


// 7. Callback with Array forEach()

let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log("Number:", number);
});
