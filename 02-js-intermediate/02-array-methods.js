
// 1. forEach() - Executes a function for each element

let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});


// 2. map() - Creates a new array

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log("Doubled:", doubled);


// 3. filter() - Filters elements based on a condition

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 4. reduce() - Reduces array to a single value

let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Sum:", sum);


// 5. find() - Returns the first matching element

let result = numbers.find(function(number) {
    return number > 25;
});

console.log("First number greater than 25:", result);


// 6. some() - Checks if at least one element matches

let hasNumber = numbers.some(function(number) {
    return number > 40;
});

console.log("Has number greater than 40:", hasNumber);


// 7. every() - Checks if all elements match

let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("All numbers are positive:", allPositive);
