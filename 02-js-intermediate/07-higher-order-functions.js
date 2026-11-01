
// 1. Function Passed as an Argument

function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    let result = callback("Anand");
    console.log(result);
}

processUser(greet);


// 2. Using forEach()

let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log(number);
});


// 3. Using map()

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log("Doubled:", doubled);


// 4. Using filter()

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 5. Function Returning Another Function

function multiplier(factor) {

    return function(number) {
        return number * factor;
    };

}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double:", double(10));
console.log("Triple:", triple(10));


// 6. Higher-Order Function with Arrow Function

function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

console.log("Addition:", calculate(10, 20, addition));

console.log("Multiplication:", calculate(10, 20, multiplication));
