
// 1. Function Declaration

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();


// 2. Function with Parameters

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);


// 3. Function with Return

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log("Multiplication:", result);


// 4. Function Expression

const subtract = function(a, b) {
    return a - b;
};

console.log("Subtraction:", subtract(20, 10));


// 5. Arrow Function

const divide = (a, b) => {
    return a / b;
};

console.log("Division:", divide(20, 5));


// 6. Default Parameters

function welcome(name = "Student") {
    console.log("Welcome", name);
}

welcome("Anand");
welcome();
